import { StyleSheet, View } from 'react-native';
import {Utils, Slider } from 'tuya-panel-kit';
import React from 'react';

const { convertX: cx } = Utils.RatioUtils;


const SliderButton: React.FC = () => {
    const [value, setValue] = React.useState(50);

    return (
    
            <Slider.Horizontal
                size={100}
                theme={{

                    width: 50,
                    height: 100,
                    trackRadius: 50,
                    trackHeight: 6,
                    thumbSize: 26,
                    thumbRadius: 26,
                    thumbTintColor: '#FFF',
                    minimumTrackTintColor: '#ccc',
                    maximumTrackTintColor: '#E5E5E5',
                }}
                style={{ marginBottom: 10, margin: 30 }}

                value={value}
                maximumValue={100}
                minimumValue={0}

                onSlidingComplete={v => console.log(v)}
            />

       
    );
};

const styles = StyleSheet.create({
   
});

export default SliderButton;
