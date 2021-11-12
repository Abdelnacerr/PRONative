import React from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Linking,
	SafeAreaView,
} from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner'

const onSuccess = (e: any) => {
	Linking.openURL(e.data).catch((err) =>
		console.error('An error occured', err)
	)
}

const QrCode = () => {
	return (
		<SafeAreaView>
			<QRCodeScanner
				onRead={onSuccess}
				// flashMode={RNCamera.Constants.FlashMode.torch}
				topContent={
					<Text>
						Go to <Text>wikipedia.org/wiki/QR_code</Text> on your
						computer and scan the QR code.
					</Text>
				}
				bottomContent={
					<TouchableOpacity>
						<Text>OK. Got it!</Text>
					</TouchableOpacity>
				}
			/>
		</SafeAreaView>
	)
}

export default QrCode

const styles = StyleSheet.create({})
