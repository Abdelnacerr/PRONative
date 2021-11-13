import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const onSuccess = (e: any) => {
  Linking.openURL(e.data).catch(err => console.error('An error occured', err));
  console.log('QR Code data', e.data);
  // setQrdata(e.data);
};

const QrScanner = () => {
  // const [qrdata, setQrdata] = useState('');

  return (
    <SafeAreaView>
      <QRCodeScanner
        onRead={onSuccess}
        topContent={<Text>qrdata</Text>}
        bottomContent={
          <TouchableOpacity>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

export default QrScanner;

const styles = StyleSheet.create({});
