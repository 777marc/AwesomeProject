import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './components/pizza';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!?</Text>
      <PizzaTranslator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
