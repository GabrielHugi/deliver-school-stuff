import { Text, StyleSheet, View } from 'react-native';

const Title = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Calculadora de IMC</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#c5f3ff",
        //e#c5f3ff
    },
    title: {
        marginTop: 8, marginBottom: 8,
        fontSize: 36,
        fontweight: 'bold',
        textAlign: 'center',
    },
});
export default Title;