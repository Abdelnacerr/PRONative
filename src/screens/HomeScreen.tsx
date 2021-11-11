import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { RootStackNavProps } from '../interfaces/RootStackParamList'
import { usersApi } from '../features/services/users'
import { Header } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native'
import { theme } from '../themes/themes'

interface HomeScrenProps {}
type Props = RootStackNavProps<'HomeScreen'> & HomeScrenProps

const HomeScreen: FC<Props> = ({ navigation }): JSX.Element => {
	const { data } = usersApi.useGetUsersQuery()

	return (
		<>
			<Header
				backgroundColor={'transparent'}
				leftComponent={{
					icon: 'menu',
					iconStyle: {
						color: theme.colors.primary,
						fontSize: theme.fontSize(3),
					},
					onPress: () =>
						navigation.dispatch(DrawerActions.openDrawer()),
				}}
			/>
		</>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})
