import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CenterView from '../components/CenterView'
import QrCode from './QrCodeScreen/QrCode'

const QrCodeScreen = () => {
	return (
		<CenterView>
			<QrCode />
		</CenterView>
	)
}

export default QrCodeScreen

const styles = StyleSheet.create({})
