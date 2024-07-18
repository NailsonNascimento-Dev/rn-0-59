import { StyleSheet, View } from 'react-native';
import { TYText } from 'tuya-panel-kit';
import React from 'react';
import ControllBar from '../../components/ControllBar';

const Setting: React.FC = () => {
  return (
    <View style={styles.container}>
      <TYText size={24} color="#fff">
        I am Setting Page&apos;s Content
      </TYText>
      <ControllBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Setting;
