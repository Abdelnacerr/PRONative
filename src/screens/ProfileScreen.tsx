import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { theme } from '../themes/themes'

const Profile = () => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Avatar
					rounded
					size='xlarge'
					source={require('../../assets/onboarding/digital.png')}
				>
					<Avatar.Accessory
						size={theme.fontSize(6)}
						color='white'
						name={'camera'}
						type={'font-awesome'}
						underlayColor={theme.colors.secondary}
						style={{ backgroundColor: theme.colors.primary }}
						iconStyle={{
							fontSize: theme.fontSize(2.5),
						}}
						onPress={() => {}}
					/>
				</Avatar>
			</View>
		</SafeAreaView>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: theme.spacing(12),
		backgroundColor: 'red',
	},
})
