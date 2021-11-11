import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface onboardingState {
	viewedOnBoarding: boolean
}

const initialState: onboardingState = {
	viewedOnBoarding: false,
}

export const onboardingSlice = createSlice({
	name: 'onboarding',
	initialState,
	reducers: {
		setOnboardingAsync: (state, action: PayloadAction<boolean>) => {
			state.viewedOnBoarding = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setOnboardingAsync } = onboardingSlice.actions

export default onboardingSlice.reducer
