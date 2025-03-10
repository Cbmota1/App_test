import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Place</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text style={styles.text}>Pet the animals to your hearts content!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
