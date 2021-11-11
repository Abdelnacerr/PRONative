import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

interface CenterViewProps {}

const CenterView: FC<CenterViewProps> = ({ children }) => {
	return <View style={styles.container}>{children}</View>
}

export default CenterView

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
