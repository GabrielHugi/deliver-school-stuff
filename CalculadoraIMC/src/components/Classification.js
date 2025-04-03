import React from 'react';
import { Text, StyleSheet } from 'react-native';
const Classification = ({ imc }) => {
    let res = ""
    if (imc < 18.5) {
        res = "é abaixo do peso";
    }
    if (imc >= 18.5 && imc < 25) {
        res = "tem peso normal";
    }
    if (imc >= 25 && imc < 30) {
        res = "é sobrepeso";
    }
    if (imc >= 30 && imc < 35) {
        res = "tem obesidade grau I";
    }
    if (imc >= 35 && imc < 40) {
        res = "tem obesidade grau II";
    }
    if (imc > 40) {
        res = "tem obesidade morbida";
    }
    return (
        <Text style={styles.result}>Você {res}</Text>
    );
};
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});
export default Classification;