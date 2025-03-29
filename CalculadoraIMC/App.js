
import { ScrollView, StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';
import DisplayIMCRecommendations from './src/components/DisplayIMCRecomendations'

export default function App() {
  return (
  <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Title />
      <FormIMC />
      <DisplayIMCRecommendations />
    </ScrollView>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: 48,
    backgroundColor: '#fff',
  },
});