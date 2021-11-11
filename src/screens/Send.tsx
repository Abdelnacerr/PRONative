import { t } from 'i18n-js'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CenterView from '../components/CenterView'

const Send = () => {
	return (
		<CenterView>
			<Text>{t('send-money')}</Text>
		</CenterView>
	)
}

export default Send

const styles = StyleSheet.create({})
