import React from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from '../../themes/themes'
import { Avatar, Text } from 'react-native-elements'

import { DrawerActions, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/RootStackParamList'

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

const ProfileView = () => {
	const navigation = useNavigation<NavigationProps>()

	const handlePress = () => {
		navigation.navigate('Profile')
		navigation.dispatch(DrawerActions.closeDrawer())
	}
	return (
		<View style={styles.container}>
			<Avatar
				size='large'
				containerStyle={{
					borderColor: theme.colors.secondary,
					borderWidth: 2,
				}}
				rounded
				source={require('../../../assets/onboarding/digital.png')}
				onPress={handlePress}
			/>
			<View>
				<Text h4>Mohamed AbdiNasir </Text>
				<Text>Transactions: 125 </Text>
				<Text>Something: 45 </Text>
			</View>
		</View>
	)
}

export default ProfileView

const styles = StyleSheet.create({
	container: {
		height: 200,
		width: '100%',
		top: theme.spacing(2),
		borderBottomColor: theme.colors.charcoal,
		borderBottomWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
