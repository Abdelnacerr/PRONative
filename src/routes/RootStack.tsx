import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../interfaces/RootStackParamList'
import { theme } from '../themes/themes'
import { useAppSelector } from '../store/hooks'

import Drawer from './Drawer'
import Login from '../screens/Auth/Login'
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen'
import OtpScreen from '../screens/Auth/OtpScreen'
import Profile from '../screens/ProfileScreen'

function RootStack() {
	const Stack = createNativeStackNavigator<RootStackParamList>()
	const viewedOnBoarding = useAppSelector(
		(state) => state.onboarding.viewedOnBoarding
	)

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={
					viewedOnBoarding === true ? 'Login' : 'OnboardingScreen'
				}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen
					name='OnboardingScreen'
					component={OnboardingScreen}
				/>
				<Stack.Screen name='Drawer' component={Drawer} />
				<Stack.Screen
					options={{
						headerShown: true,
						headerStyle: {
							backgroundColor: theme.colors.whiteSmoke,
						},
					}}
					name='Profile'
					component={Profile}
				/>
				<Stack.Screen
					name='OtpScreen'
					component={OtpScreen}
					options={{
						title: 'OTP',
						headerShown: true,
						headerStyle: {
							backgroundColor: theme.colors.whiteSmoke,
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default RootStack
