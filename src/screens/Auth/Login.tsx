import React, {FC} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackNavProps} from '../../interfaces/RootStackParamList';
import PhoneNumberInput from './RNPhoneNumberInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../themes/themes';
import ChangeLanguage from '../../localization/Localization';

interface LoginProps {}
type Props = RootStackNavProps<'Login'> & LoginProps;

const Login: FC<Props> = ({navigation}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Drawer');
          }}>
          <FontAwesome5 name="question-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: theme.fontSize(2.5),
            paddingBottom: 15,
          }}>
          Enter your mobile number{' '}
        </Text>
        <Text
          style={{
            fontSize: theme.fontSize(1.5),
            color: theme.colors.primary,
          }}>
          By typing your number, you agree to our Terms of service and privacy
          policy{' '}
        </Text>
      </View>
      <View style={styles.inputField}>
        <PhoneNumberInput navigation={navigation} />
      </View>
      <ChangeLanguage />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: theme.spacing(2),
  },
  info: {
    top: Platform.OS === 'ios' ? theme.spacing(6.5) : theme.spacing(4.5),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  header: {
    top: Platform.OS === 'ios' ? theme.spacing(6.5) : theme.spacing(3.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
