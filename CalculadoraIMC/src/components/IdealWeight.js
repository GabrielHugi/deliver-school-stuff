import React from 'react';
import { Text, StyleSheet } from 'react-native';
const IdealWeight = ({ altura }) => {
    return (
        <Text style={styles.normalText}>O seu peso ideal é entre: {Math.round(18.5*altura*altura)}kg e {Math.round(24.9*altura*altura)}kg</Text>
    );
};
const styles = StyleSheet.create({
    normalText: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});
export default IdealWeight;