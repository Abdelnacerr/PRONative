import React, {FC} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import {
  RootStackNavProps,
  RootStackParamList,
} from '../interfaces/RootStackParamList';
import QrCodeScreen from '../screens/QrCodeScreen';
import Send from '../screens/Send';
import Chat from '../screens/Chat';
import {theme} from '../themes/themes';

type Props = RootStackNavProps<'Tabs'>;

const Tabs: FC<Props> = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  const iconSize = 28;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            (iconName = 'money-check-alt'), (size = iconSize);
          } else if (route.name === 'Chat') {
            iconName = 'comment-dots';
            size = iconSize;
          } else if (route.name === 'QrCodeScreen') {
            iconName = 'qrcode';
            size = iconSize;
          } else if (route.name === 'Send') {
            iconName = 'dollar-sign';
            size = iconSize;
          }

          return (
            <FontAwesome5
              name={iconName ? iconName : ''}
              size={size}
              color={color}
              style={styles.icons}
            />
          );
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        keyboardHidesTabBar: true,
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          height: 70,
          bottom: theme.spacing(2.5),
          left: theme.spacing(2.5),
          right: theme.spacing(2.5),
          borderRadius: theme.borderRadius(2.5),
          ...styles.shadow,
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="QrCodeScreen" component={QrCodeScreen} />
      <Tab.Screen name="Send" component={Send} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.charcoal,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  //icon when focused styles
  icons: {
    top: Platform.OS === 'ios' ? 15 : 0,
  },

});
