import { StyleSheet, View, Text, } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
export default function Location() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 30.974092449402022, 
                    longitude:72.48063139097238,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                 />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '50%',
    },
})


