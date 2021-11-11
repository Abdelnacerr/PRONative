import { combineReducers } from '@reduxjs/toolkit'
import { usersApi } from '../features/services/users'
import onboardingReducer from '../features/viewedOnboardingSlice'
import languageReducer from '../features/languageSlice'

export const rootReducer = combineReducers({
	[usersApi.reducerPath]: usersApi.reducer,
	onboarding: onboardingReducer,
	language: languageReducer,
})
