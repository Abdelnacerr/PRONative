import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface languageState {
	currentLanguage: string
}

const initialState: languageState = {
	currentLanguage: '',
}
export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		toggleLanguage: (state, action: PayloadAction<string>) => {
			state.currentLanguage = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { toggleLanguage } = languageSlice.actions

export default languageSlice.reducer
