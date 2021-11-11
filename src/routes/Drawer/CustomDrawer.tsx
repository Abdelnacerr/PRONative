import React, { FC } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { theme } from '../../themes/themes'
import { colors, links } from '../../utils'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import ProfileView from './ProfileView'
import { RootStackNavProps } from '../../interfaces/RootStackParamList'

const Button = ({ title, onPress, style }: any) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.9}>
			<Text style={style}>{title}</Text>
		</TouchableOpacity>
	)
}

interface CustomDrawerProps {
	selectedRoute: string
	routes: string[]
}
type Props = RootStackNavProps<'CustomDrawer'> & CustomDrawerProps

const CustomDrawer: FC<CustomDrawerProps> = ({ selectedRoute, routes }) => {
	const navigation = useNavigation()
	const onRoutePress = React.useCallback((route) => {
		navigation.navigate(route)
		navigation.dispatch(DrawerActions.closeDrawer())
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<ProfileView />
			<View style={styles.container}>
				<View style={styles.menuContainer}>
					{routes.map((route, index) => {
						if (route === 'Tabs') {
							return null
						}
						return (
							<Button
								key={route}
								title={route}
								style={[
									styles.button,
									{
										textDecorationLine:
											route === selectedRoute
												? 'line-through'
												: 'none',
										color: colors[index],
									},
								]}
								onPress={() => onRoutePress(route)}
							/>
						)
					})}
				</View>

				<View
					style={{
						bottom: theme.spacing(2.5),
					}}
				>
					{links.map((link, index) => {
						return (
							<Button
								key={link}
								title={link}
								style={[
									styles.buttonSmall,
									{
										color: colors[
											index + routes.length + 1
										],
									},
								]}
								// onPress={onPress}
							/>
						)
					})}
				</View>
			</View>
		</View>
	)
}

export default CustomDrawer

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		marginTop: theme.spacing(0.5),
		borderTopColor: theme.colors.charcoal,
		borderTopWidth: 1,
	},
	menuContainer: {
		paddingTop: theme.spacing(1),
		paddingHorizontal: theme.spacing(2.5),
		paddingBottom: theme.spacing(2.5),
	},
	button: {
		fontSize: theme.fontSize(3),
		lineHeight: 32 * 1.5,
	},
	buttonSmall: {
		paddingHorizontal: theme.spacing(2.5),
		fontSize: theme.fontSize(2.5),
		marginBottom: theme.spacing(0.5),
		bottom: Platform.OS === 'ios' ? theme.spacing(4) : theme.spacing(1.5),
	},
})
