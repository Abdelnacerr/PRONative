import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
	RootStackNavProps,
	RootStackParamList,
} from '../interfaces/RootStackParamList'
import Tabs from './Tabs'
import CustomDrawer from './Drawer/CustomDrawer'
import Login from '../screens/Auth/Login'
import HomeScreen from '../screens/HomeScreen'
import OtpScreen from '../screens/Auth/OtpScreen'

interface Drawer {}

type Props = RootStackNavProps<'Drawer'> & Drawer

const Drawer: FC<Props> = ({ navigation }): JSX.Element => {
	const Drawer = createDrawerNavigator<RootStackParamList>()

	return (
		<Drawer.Navigator
			screenOptions={() => ({
				headerShown: false,
				drawerType: 'front',
				swipeEdgeWidth: 500,
			})}
			drawerContent={(props) => (
				<CustomDrawer
					routes={props.state.routeNames}
					selectedRoute={props.state.routeNames[props.state.index]}
				/>
			)}
		>
			<Drawer.Screen name='Tabs' component={Tabs} />
			<Drawer.Screen name='Login' component={Login} />
			<Drawer.Screen name='HomeScreen' component={HomeScreen} />
			<Drawer.Screen name='OtpScreen' component={OtpScreen} />
		</Drawer.Navigator>
	)
}

export default Drawer

const styles = StyleSheet.create({})
