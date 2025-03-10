import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

import { Text as ThemedText, View as ThemedView } from '@/components/Themed';



export default function TabTwoScreen() {
  
  const [carinhoCount, setCarinhoCount] = useState(0);

  
  const fazerCarinho = () => {
    setCarinhoCount(carinhoCount + 1);
  };

  return (
    <ThemedView style={styles.container}>
      <Image source={require('../../assets/images/Cat-PNG-Photo-1.png')} style={styles.image} />
      <Text style={styles.catName}>Romeo</Text>
      <Text style={styles.counter}>Petted: {carinhoCount}</Text>
      <Button title="Pet" onPress={fazerCarinho} color="#4CAF50" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  catName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 5,
  },
  counter: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
