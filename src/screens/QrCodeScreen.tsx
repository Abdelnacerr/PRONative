import React from 'react';
import {StyleSheet, Text} from 'react-native';
import CenterView from '../components/CenterView';
import QrScanner from './QrCodeScreen/QrCodeScanner';
import QrCodeSvg from './QrCodeScreen/QrCodeSvg';

const QrCodeScreen = () => {
  return (
    <CenterView>
      {/* <QrScanner/> */}
      <QrCodeSvg />
    </CenterView>
  );
};

export default QrCodeScreen;

const styles = StyleSheet.create({});
