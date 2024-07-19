import { StyleSheet, View } from 'react-native';
import { TYText, Button, ControllerBar, IconFont, TYSdk, TabBar, Utils } from 'tuya-panel-kit';

import React from 'react';

const powerPath = `M874.039 149.961c199.948 199.949 199.948 524.13 0 724.078-199.949 199.948-524.13 199.948-724.078 0-199.948-199.949-199.948-524.13 0-724.078 19.995-19.995 52.413-19.995 72.408 0 19.995 19.995 19.995 52.413 0 72.408-159.959 159.959-159.959 419.303 0 579.262 159.959 159.959 419.303 159.959 579.262 0 159.959-159.959 159.959-419.303 0-579.262-19.995-19.995-19.995-52.413 0-72.408 19.995-19.995 52.413-19.995 72.408 0zM562.2 0a1 1 0 0 1 1 1v510a1 1 0 0 1-1 1H461.8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h100.4z`;
const backAndroid = 'M603.875556 28.956444a56.888889 56.888889 0 0 1 0 80.440889L258.161778 455.111111H938.666667a56.888889 56.888889 0 0 1 6.656 113.379556L938.666667 568.888889H258.844444l345.031112 345.031111a56.888889 56.888889 0 1 1-80.440889 80.440889L80.952889 551.879111a56.888889 56.888889 0 0 1 0-80.440889L523.377778 28.956444a56.888889 56.888889 0 0 1 80.440889 0z'
const selected = 'M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m279.04 362.8032a51.2 51.2 0 0 0-72.3968 0l-253.44 253.3888-108.6464-108.544a51.2 51.2 0 0 0-72.3968 72.3456l144.2304 144.1792 0.6144 0.6656a51.2 51.2 0 0 0 72.3968 0L791.04 435.2a51.2 51.2 0 0 0 0-72.3968z';

const navToSetting = () => {
    TYSdk.Navigator.push({ id: 'setting' });
};

const navTotimer = () => {
    TYSdk.Navigator.push({ id: 'dimmer' });
};


const navToHome = () => {
    TYSdk.Navigator.push({ id: 'main' });
};

const { convertX: cx } = Utils.RatioUtils;

const ControleDimmer: React.FC = () => {
    return (


        <View>
            <ControllerBar style={styles.ControllerBar}
                button={[
                    { text: '1', type: 'primary', iconPath: backAndroid, iconSize: 30, onPress: navToHome },
                    { text: '2', type: 'primary', iconPath: selected, iconSize: 30, onPress: navTotimer },
                    { text: '3', type: 'primary', iconPath: powerPath, iconSize: 30, onPress: navToSetting },
                ]}
            />

            <TabBar
            type="string"
            tabs={[

                    
                    { key: `1`, title: `1`, onPress: navToHome},
                    { key: `2`, title: `2` },
                    { key: `3`, title: `3` },

            ]}
            style={{
                marginTop: 10,
                height: cx(42),
                borderRadius: cx(21),
                backgroundColor: '#E5E5E5',
                
              }}
            
            
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    ControllerBar: {
        backgroundColor: "#fff",
    }
});

export default ControleDimmer;
