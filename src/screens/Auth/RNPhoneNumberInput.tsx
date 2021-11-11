import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';
import {Button} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RootStackNavProps} from '../../interfaces/RootStackParamList';
import Toast from 'react-native-toast-message';
import {theme} from '../../themes/themes';

type Props = RootStackNavProps<'Login'>;

const RNPhoneNumberInput: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const onSubmit = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);

    valid
      ? navigation.navigate('OtpScreen')
      : Toast.show({
          type: 'error',
          text1: 'Hello',
          text2: formattedValue
            ? `${formattedValue} is not a valid number`
            : 'Please enter a valid number',
          position: 'bottom',
        });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{}}>
        <SafeAreaView>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="SO"
            placeholder="61 6533381"
            layout="second"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />

          <Button
            style={{
              marginTop: theme.spacing(2.5),
              width: '100%',
              backgroundColor: theme.colors.secondary,
            }}
            icon={() => (
              <FontAwesome5
                name="arrow-right"
                size={24}
                color={theme.colors.primary}
              />
            )}
            mode="contained"
            onPress={onSubmit}>
            <Text
              style={{
                fontSize: theme.fontSize(2.5),
                color: theme.colors.primary,
              }}>
              Next
            </Text>
          </Button>
        </SafeAreaView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({});

export default RNPhoneNumberInput;
