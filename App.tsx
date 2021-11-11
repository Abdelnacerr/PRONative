import React from 'react';
import {StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/app/store';
import RootStack from './src/routes/RootStack';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
          <Toast ref={ref => Toast.setRef(ref)} />
        </PersistGate>
      </Provider>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
