import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
	HomeScreen: undefined
	Login: undefined
	OnboardingScreen: undefined
	Tabs: undefined
	OtpScreen: undefined
	Drawer: undefined
	QrCodeScreen: undefined
	Send: undefined
	Chat: undefined
	CustomDrawer: undefined
	Profile: undefined
	ProfileView: undefined
}

export type RootStackNavProps<T extends keyof RootStackParamList> = {
	navigation: NativeStackNavigationProp<RootStackParamList, T>
}
