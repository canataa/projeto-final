import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Image, Animated, Pressable } from "react-native";
export default function Inicio() {
  const [texto, setTexto] = useState("");

  // Criar animações individuais para cada quadrado
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;
  const scale3 = useRef(new Animated.Value(1)).current;
  const scale4 = useRef(new Animated.Value(1)).current;

  const animate = (anim, to) => {
    Animated.spring(anim, {
      toValue: to,
      useNativeDriver: true,
      friction: 4,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

      {/* Caixa de texto principal */}
      <View style={styles.content}>
        <View style={styles.caixa}>
          <Text style={styles.titulo}>O que é Hardware</Text>
          <Text style={[styles.textocaixa]} >
            
           "Hardware é a parte física do computador, ou seja, tudo o que você pode tocar.
Inclui componentes como o monitor, teclado, mouse, processador, memória e placa-mãe.
Essas peças trabalham juntas para que o computador funcione e execute os programas (que são o software).
Em resumo, o hardware é o corpo do computador, enquanto o software é o cérebro que o faz agir."
            </Text>
          
        </View>
      </View>

      {/* Quadrado 1 */}
      <Pressable
        onPressIn={() => animate(scale1, 1.1)}
        onPressOut={() => animate(scale1, 1)}
      >
        <Animated.View style={[styles.hard, { transform: [{ scale: scale1 }] }]}>
<Image source={require("../assets/placa_de_video.png")} 
 style={styles.imagem}
/>

          <Text style={styles.input}>Placa De Vídeo NVIDIA Asus Strix RTX 4080</Text>
        </Animated.View>
      </Pressable>

      {/* Quadrado 2 */}
      <Pressable
        onPressIn={() => animate(scale2, 1.1)}
        onPressOut={() => animate(scale2, 1)}
      >
        <Animated.View style={[styles.hard2, { transform: [{ scale: scale2 }] }]}>
         <Image source={require("../assets/placa_mae.png")} 
 style={styles.imagem}
/>
          <Text style={styles.input2}>Placa Mãe Gigabyte B550M AORUS Elite</Text>
        </Animated.View>
      </Pressable>

      {/* Quadrado 3 */}
      <Pressable
        onPressIn={() => animate(scale3, 1.1)}
        onPressOut={() => animate(scale3, 1)}
      >
        <Animated.View style={[styles.hard3, { transform: [{ scale: scale3 }] }]}>
          <Image
            source={{ uri: "https://cdn.awsli.com.br/2500x2500/2508/2508057/produto/205993563/1-lvjtrr.jpg" }}
            style={styles.imagem}
          />
          <Text style={styles.input3}>Processador AMD ZEN 4 Ryzen 9 7950X</Text>
        </Animated.View>
      </Pressable>

      {/* Quadrado 4 */}
      <Pressable
        onPressIn={() => animate(scale4, 1.1)}
        onPressOut={() => animate(scale4, 1)}
      >
        <Animated.View style={[styles.hard4, { transform: [{ scale: scale4 }] }]}>
          <Image
            source={{ uri: "https://img.olx.com.br/images/37/374598577163702.jpg" }}
            style={styles.imagem}
          />
          <Text style={styles.input4}>Mouse Gamer Fade RGB</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(11, 5, 58)",
  },
  header: {
    height: 70,
    backgroundColor: "rgb(0, 0, 0)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  headerText: {
    color: "rgb(255, 255, 255)",
    fontSize: 35,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textocaixa: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "white",
    textAlign: "center",
    flexWrap: "wrap",
    width: "90%",
  },
  caixa: {
    position: "absolute",
    width: 550,
    height: 250,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 20,
    elevation: 12,
    marginTop: -600,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  hard: {
    width: 230,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 10,
    left: 30,
    alignItems: "center",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 20,
    elevation: 12,
    marginTop: -600,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "rgba(0, 132, 255, 0.1)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
  },
  hard2: {
    width: 230,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 10,
    left: 343,
    alignItems: "center",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 20,
    elevation: 12,
    marginTop: -600,
  },
  input2: {
    width: "90%",
    height: 40,
    backgroundColor: "rgba(0, 132, 255, 0.1)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
  },
  hard3: {
    width: 230,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 10,
    left: 30,
    alignItems: "center",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 20,
    elevation: 12,
    marginTop: -300,
  },
  input3: {
    width: "90%",
    height: 40,
    backgroundColor: "rgba(0, 132, 255, 0.1)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
  },
  hard4: {
    width: 230,
    height: 270,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 10,
    left: 343,
    alignItems: "center",
    shadowColor: "rgb(0, 130, 252)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 20,
    elevation: 12,
    marginTop: -300,
  },
  input4: {
    width: "90%",
    height: 40,
    backgroundColor: "rgba(0, 132, 255, 0.1)",
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
  },
});


