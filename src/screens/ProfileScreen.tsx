import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {theme} from '../themes/themes';
import ImagePicker from 'react-native-image-crop-picker';
import ProfileDetails from './ProfileDetails';
import {Center, NativeBaseProvider} from 'native-base';
import {t} from '../localization/Localization';

const Profile = () => {
  const [profilePic, setProfilePic] = React.useState('');

  const AvatarPicker = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfilePic(image.path);
    });
  };

  return (
    <NativeBaseProvider>
      <Center marginTop={4}>
        <Avatar
          rounded
          size="xlarge"
          source={
            profilePic
              ? {uri: profilePic}
              : require('../../assets/onboarding/digital.png')
          }>
          <Avatar.Accessory
            size={theme.fontSize(6)}
            color="white"
            name={'camera'}
            type={'font-awesome'}
            underlayColor={theme.colors.secondary}
            style={{backgroundColor: theme.colors.primary}}
            iconStyle={{
              fontSize: theme.fontSize(2.5),
            }}
            tvParallaxProperties={{
              parallaxFactor: 0.1,
            }}
            onPress={AvatarPicker}
          />
        </Avatar>
      </Center>
      <ProfileDetails />
    </NativeBaseProvider>
  );
};

export default Profile;

const styles = StyleSheet.create({});
