import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { FC } from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Onboarding from 'react-native-onboarding-swiper'
import { useAppDispatch } from '../../app/hooks'
import { setOnboardingAsync } from '../../features/viewedOnboardingSlice'
import { RootStackNavProps } from '../../interfaces/RootStackParamList'
import { theme } from '../../themes/themes'
import Dots from './Dots'
interface OnboardingProps {}

type Props = RootStackNavProps<'OnboardingScreen'> & OnboardingProps

const OnboardingScreen: FC<Props> = ({ navigation }): JSX.Element => {
	const dispatch = useAppDispatch()

	const Done = ({ ...props }) => (
		<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
			<Text style={{ fontSize: theme.fontSize(2) }}>Done</Text>
		</TouchableOpacity>
	)
	return (
		<>
			<Onboarding
				DoneButtonComponent={Done}
				DotComponent={Dots}
				onSkip={() => (
					dispatch(setOnboardingAsync(true)),
					navigation.replace('Login'),
					AsyncStorage.setItem('@onBoarding', JSON.stringify(true))
				)}
				onDone={() => (
					dispatch(setOnboardingAsync(true)),
					navigation.replace('Login')
				)}
				pages={[
					{
						backgroundColor: '#a6e4d0',
						image: (
							<Image
								source={require('../../../assets/onboarding/digital.png')}
								style={styles.image}
							/>
						),
						title: 'NomadPay',
						subtitle: 'A digital Bank at your finger tips!',
					},
					{
						backgroundColor: '#fdeb93',
						image: (
							<Image
								source={require('../../../assets/onboarding/easy.webp')}
								style={styles.image}
							/>
						),
						title: 'Quick and easy Payments',
						subtitle:
							'Send and receive money to and from friends and family',
					},
					{
						backgroundColor: '#e9bcbe',
						image: (
							<Image
								source={require('../../../assets/onboarding/qr.webp')}
								style={styles.image}
							/>
						),
						title: 'Shop in Store with Qr-codes',
						subtitle:
							'Easily shop in-store and scan Qr codes to make instant payments',
					},
					{
						backgroundColor: '#f4e8d6',
						image: (
							<Image
								source={require('../../../assets/onboarding/send.jpeg')}
								style={styles.image}
							/>
						),
						title: 'Shop Online',
						subtitle:
							'Shop online and securely pay with your app, no credit card necessary',
					},
				]}
			/>
		</>
	)
}

export default OnboardingScreen

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 200,
	},
})
