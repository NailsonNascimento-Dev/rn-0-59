import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Utils } from 'tuya-panel-kit';
import ButtonPower from '../../components/ButtonPower';
import ControllBar from '../../components/ControllBar';
import SliderButton from 'components/SliderButton';



const powerPath = `M874.039 149.961c199.948 199.949 199.948 524.13 0 724.078-199.949 199.948-524.13 199.948-724.078 0-199.948-199.949-199.948-524.13 0-724.078 19.995-19.995 52.413-19.995 72.408 0 19.995 19.995 19.995 52.413 0 72.408-159.959 159.959-159.959 419.303 0 579.262 159.959 159.959 419.303 159.959 579.262 0 159.959-159.959 159.959-419.303 0-579.262-19.995-19.995-19.995-52.413 0-72.408 19.995-19.995 52.413-19.995 72.408 0zM562.2 0a1 1 0 0 1 1 1v510a1 1 0 0 1-1 1H461.8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h100.4z`;

const { convertX: cx } = Utils.RatioUtils;


const HommeControll: React.FC = () => {


    return (
        <View style={styles.container}>
            <View style={styles.button} >
                <ButtonPower />
            </View>
            <View style={styles.slider}>
                <SliderButton />
                <ControllBar />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    
    button:{
        flex: 1,
        justifyContent: 'center',
    },

    slider:{
        flex: 1,
        justifyContent: 'space-between',
    },




    

});

export default HommeControll;
