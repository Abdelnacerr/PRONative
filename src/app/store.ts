import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from '../features/services/users'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import { rootReducer } from './rootReducer'

const persistConfig = {
	key: 'root',
	version: 1,
	storage: AsyncStorage,
	whitelist: ['language', 'onboarding'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(usersApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
setupListeners(store.dispatch)
