import React, { FC, useEffect, useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { RootStackNavProps } from '../../interfaces/RootStackParamList'
import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../themes/themes'

type Props = RootStackNavProps<'OtpScreen'>

const OtpScreen: FC<Props> = ({ navigation }) => {
	const [seconds, setSeconds] = useState(30)

	useEffect(() => {
		const refreshTimer = setInterval(() => {
			seconds > 0 && setSeconds(seconds - 1)
		}, 1000)

		return () => {
			clearInterval(refreshTimer)
		}
	}, [seconds])

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Confirm OTP</Text>
				<Text style={styles.label}>
					Enter the OTP we just sent to your number
				</Text>
			</View>
			<OTPInputView
				pinCount={4}
				autoFocusOnLoad
				codeInputHighlightStyle={styles.underlineStyleHighLighted}
				codeInputFieldStyle={styles.underlineStyleBase}
			/>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text style={styles.time}> 00.{seconds}sec</Text>
				<TouchableOpacity>
					<Text style={styles.resend}>Resend</Text>
				</TouchableOpacity>
			</View>
			<Button
				style={{
					marginTop: 20,
					width: '100%',
					backgroundColor: theme.colors.secondary,
				}}
				mode='contained'
				onPress={() => navigation.navigate('Drawer')}
			>
				<Text
					style={{
						fontSize: theme.fontSize(2.5),
						color: theme.colors.primary,
					}}
				>
					Confirm
				</Text>
			</Button>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 0.3,
		margin: theme.spacing(5),
	},
	underlineStyleHighLighted: {
		borderColor: theme.colors.primary,
		color: theme.colors.primary,
		fontSize: theme.fontSize(3),
	},
	underlineStyleBase: {
		borderColor: '#A998F9',
		borderWidth: 1,
		fontSize: theme.fontSize(3),
		color: theme.colors.primary,
	},
	text: {
		fontSize: theme.fontSize(3.5),
		color: theme.colors.primary,
	},
	textContainer: {
		alignItems: 'center',
	},
	label: {
		fontSize: theme.fontSize(2),
		color: theme.colors.primary,
		textAlign: 'center',
	},
	time: {
		fontSize: theme.fontSize(2),
		color: theme.colors.primary,
	},
	resend: {
		color: theme.colors.primary,
		fontSize: theme.fontSize(2),
		fontWeight: 'bold',
	},
})

export default OtpScreen
