import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './components/signupForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SignupForm />
      <Text>Open up App.tsx to start working on your app! Testing</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
