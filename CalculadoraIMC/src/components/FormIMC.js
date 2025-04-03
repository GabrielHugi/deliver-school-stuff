
import {useState} from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import IdealWeight from './IdealWeight';
import Classification from './Classification';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [alturaSend, setAlturaSend] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            setAlturaSend(altura);
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };
    
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc ? <View style={styles.result}>
                <View style={styles.resultItem}>
                {imc && <Result imc={imc}/>}
                </View>
                <View style={styles.resultItem}>
                {imc && <Classification imc={imc} />}
                </View>
                <View style={styles.resultItem}>
                {imc && <IdealWeight altura={parseFloat(alturaSend) / 100} />}
                </View>
            </View> : <></>}
            
        </View>
    );
};
const styles = StyleSheet.create({
    result: {
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    resultItem: {
        borderBottomWidth: 1,
    },
    formContainer: {
        backgroundColor: '#fefefe',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});
export default FormIMC;