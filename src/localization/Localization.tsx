import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggleLanguage } from '../features/languageSlice'
import i18n from 'i18n-js'
import en from './en.json'
import so from './so.json'

const ChangeLanguage = () => {
	const dispatch = useAppDispatch()
	const currentLanguage = useAppSelector(
		(state) => state.language.currentLanguage
	)

	const toggleLanguageHandler = (lang: string) => {
		dispatch(toggleLanguage(lang))
	}

	i18n.locale = currentLanguage
	i18n.translations = { so, en }
	i18n.defaultLocale = 'en'
	i18n.fallbacks = true

	return (
		<View>
			<Button
				title='English'
				onPress={() => toggleLanguageHandler('en')}
			/>
			<Button
				title='Af soomaali'
				onPress={() => toggleLanguageHandler('so')}
			/>
		</View>
	)
}
export const t = i18n.t
export default ChangeLanguage

const styles = StyleSheet.create({})
