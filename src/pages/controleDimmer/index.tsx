import { StyleSheet, View } from 'react-native';
import { TYText } from 'tuya-panel-kit';
import React from 'react';

const ControleDimmer: React.FC = () => {
  return (
    <View style={styles.container}>
      <TYText size={24} color="#f">
       botão
      </TYText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ControleDimmer;
