import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrCodeSvg = () => {
  return (
    <View>
      <QRCode value="https://mail.google.com/mail/u/0/#inbox" />
    </View>
  );
};

export default QrCodeSvg;

const styles = StyleSheet.create({});
