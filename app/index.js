import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Inicio() {
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

  
      <View style={styles.content}>
       <View style={styles.caixa}>
       <Text style={styles.titulo}>O que é Hardware</Text>
       
        <TextInput
           style={[styles.textocaixa]}
           
          placeholder="Hardware é a parte física do computador, ou seja, tudo o que você pode tocar.
Inclui componentes como o monitor, teclado, mouse, processador, memória e placa-mãe.
Essas peças trabalham juntas para que o computador funcione e execute os programas (que são o software).
Em resumo, o hardware é o corpo do computador, enquanto o software é o cérebro que o faz agir."
          placeholderTextColor="rgb(248, 246, 246)"
         multiline
         editable={false}
          
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(11, 5, 58)',
  },
  header: {
    height: 70,
    backgroundColor: 'rgb(0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    
  },
  headerText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 35,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textocaixa: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '90%',
  },
  caixa: {
    width: 550,
    height: 250,
    backgroundColor: 'rgb(23, 14, 92)',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',   
    shadowColor: 'rgb(0, 130, 252)',
    shadowOpacity: 0.8,
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 20,
    elevation: 12,
    marginTop: -600,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  
  
});
