import { StyleSheet, View } from 'react-native';
import { TYText, Button } from 'tuya-panel-kit';
import React from 'react';



const ControleDimmer: React.FC = () => {
  return (
    <View style={styles.container}>
      <TYText size={24} color="#f00">
       botão
      </TYText>
      <TYText size={50} color="#f00">
       barra dimmer
      </TYText>

      <Button 
        text='teste'
       
      />

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
