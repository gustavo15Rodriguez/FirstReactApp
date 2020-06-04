import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function location() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    });

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = {
            'timestamp': location.timestamp,
            'altitude': location.coords.altitude,
            'latitude': location.coords.latitude,
            'longitude': location.coords.longitude,
        }

    }

    return (
        <View>
            <Text>DATOS GEOGRAFICOS</Text>
            <Text>Timestamp: {text.timestamp}</Text>
            <Text>Altitud: {text.altitude}</Text>
            <Text>Latitud: {text.latitude}</Text>
            <Text>Longitud: {text.longitude}</Text>
        </View>
    );
}