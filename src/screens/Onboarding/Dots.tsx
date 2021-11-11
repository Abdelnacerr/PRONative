import React from 'react'
import { StyleSheet, View } from 'react-native'
import {theme} from '../../themes/themes'

interface DotsProps {
	selected: boolean
}
const Dots = ({ selected }: DotsProps) => {
	let backgroundColor
	backgroundColor = selected ? theme.colors.primary : theme.colors.white

	return (
		<View
			style={{
				width: selected ? 20 : 10,
				height: 10,
				borderRadius: 5,
				marginHorizontal: 8,
				backgroundColor,
			}}
		></View>
	)
}

export default Dots

const styles = StyleSheet.create({})
