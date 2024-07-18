import { StyleSheet, View } from 'react-native';
import { TYText, Button, Utils, Slider } from 'tuya-panel-kit';
import React from 'react';

const powerPath = `M874.039 149.961c199.948 199.949 199.948 524.13 0 724.078-199.949 199.948-524.13 199.948-724.078 0-199.948-199.949-199.948-524.13 0-724.078 19.995-19.995 52.413-19.995 72.408 0 19.995 19.995 19.995 52.413 0 72.408-159.959 159.959-159.959 419.303 0 579.262 159.959 159.959 419.303 159.959 579.262 0 159.959-159.959 159.959-419.303 0-579.262-19.995-19.995-19.995-52.413 0-72.408 19.995-19.995 52.413-19.995 72.408 0zM562.2 0a1 1 0 0 1 1 1v510a1 1 0 0 1-1 1H461.8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h100.4z`;

const { convertX: cx } = Utils.RatioUtils;


const PowerButton: React.FC = () => {
  const [value, setValue] = React.useState(50);

  return (
    <View style={styles.container} >
        <Button
          size={80}
          iconColor='#fff'
          style={{
            width: cx(150),
            height: cx(150),
            backgroundColor: '#eded12',
            shadowColor: '#000',
            borderRadius:100
           
          }}
      
          iconPath={powerPath}
        />

        <Slider.Horizontal
          // style={{ 
          //   alignSelf:'center',
          //   height:50,
          //   width:318,
            
          // }}

          theme={{
           
            width: 50,
            height: 6,
            trackRadius: 50,
            trackHeight: 6,
            thumbSize: 26,
            thumbRadius: 26,
            thumbTintColor: '#FFF',
            minimumTrackTintColor: '#ccc',
            maximumTrackTintColor: '#E5E5E5',
          }}    
          style={{ marginBottom: 10, margin: 30}}
          
          value={value}
          maximumValue={100}
          minimumValue={0}
    
          onSlidingComplete={v => console.log(v)}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    padding:5,
    flex:1,
    justifyContent: 'space-around',
  },
});

export default PowerButton;
