import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Center, NativeBaseProvider, Text, VStack} from 'native-base';
import {t} from '../localization/Localization';

const ProfileDetails = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <VStack margin={4}>
          <Button
            mx={{
              base: 'auto',
              md: 0,
            }}
            p="2"
            bgColor="indigo.300"
            bg="indigo.400"
            _text={{
              fontSize: 14,
            }}
            onPress={() => console.log('Pressed')}>
            {t('edit-profile')}
          </Button>
        </VStack>
        <VStack space={4} alignItems="center">
          <Center w="80" h="20" bg="indigo.50" rounded="md" shadow={0}>
            <Text fontSize="2xl" color="warmGray.600">
              Mohamed AbdiNasir
            </Text>
          </Center>
          <Center w="80" h="20" bg="indigo.50" rounded="md" shadow={0}>
            <Text fontSize="2xl" color="warmGray.600">
              {t('account')}: 8088646548996
            </Text>
          </Center>
          <Center w="80" h="20" bg="indigo.50" rounded="md" shadow={0}>
            <Text fontSize="2xl" color="warmGray.600">
              Mobile: +61422673013
            </Text>
          </Center>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
