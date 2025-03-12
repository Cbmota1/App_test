import { View, Image, Text, Button, StyleSheet } from "react-native"
import {  useState } from "react";
import { type ComponentProps } from './types'


export default function ImgPet ({ nome, image }: ComponentProps)  {
    const [carinhoCount, setCarinhoCount] = useState(0);
    const fazerCarinho = () => {
    setCarinhoCount(carinhoCount + 1);
  };
    return (
        <View style={styles.container}>
              <Image source={image} style={styles.image} />
              <Text style={styles.dogName}>{nome}</Text>
              <Text style={styles.counter}>Petted: {carinhoCount}</Text>
              <Button title="Pet" onPress={fazerCarinho} color="#4CAF50" />
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
    dogName: {
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
  });
  