import React from 'react';
import { Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import magrelo from "../../assets/magrelo.png";
import normal from "../../assets/normal.png";
import sobrepeso from "../../assets/sobrepeso.png";
import grau1 from "../../assets/grau1.png";
import grau2 from "../../assets/grau2.png";
import morbida from "../../assets/morbida.jpg";
const Display = ({ imc }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Tabela de IMC</Text>
        <View  style={styles.flexrow}>
            <View>
                <Text style={styles.imcHeader}>Menor que 18.5</Text>
                <Text style={styles.imcText}>Abaixo do peso</Text>
            </View>
            <Image style={styles.imcImage} source= {magrelo}/>
        </View>
        <View  style={styles.flexrow}>
            <View>
                <Text style={styles.imcHeader}>Entre 18.5 e 24.9</Text>
                <Text style={styles.imcText}>Peso normal</Text>
            </View>
            <Image style={styles.imcImage} source= {normal}/>
        </View>
        <View  style={styles.flexrow}>
            <View>
                <Text style={styles.imcHeader}>Entre 25 e 29.9</Text>
                <Text style={styles.imcText}>Sobrepeso</Text>
            </View>
            <Image style={styles.imcImage} source= {sobrepeso}/>
        </View>
        <View  style={styles.flexrow}>
            <View>
                <Text style={styles.imcHeader}>Entre 30 e 34.9</Text>
                <Text style={styles.imcText}>Obesidade grau I</Text>
            </View>
            <Image style={styles.imcImage} source= {grau1}/>
        </View>
        <View  style={styles.flexrow}>
            <View>
                <Text style={styles.imcHeader}>Entre 35 e 39.9</Text>
                <Text style={styles.imcText}>Obesidade grau II</Text>
            </View>
            <Image style={styles.imcImage} source= {grau2}/>
        </View>
        <View  style={styles.flexrow}>
            <View>
                <Text style={styles.imcHeader}>Maior que 40</Text>
                <Text style={styles.imcText}>Obesidade morbida</Text>
            </View>
            <Image style={styles.imcImage} source= {morbida}/>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    flexrow: {
        display: "flex",
        flexDirection: "row"
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 36,
        textAlign: 'center',
        color: '#333',
    },
    imcHeader: {
        marginTop: 0,
        fontSize: 24,
        textAlign: 'left',
        color: '#333',
    },
    imcText: {
        marginTop: 5,
        fontSize:18,
        textAlign: 'left',
    },
    imcImage: {
        width: 100,
        height: 120,
    },
    
});
export default Display;