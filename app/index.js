import React, { useState, useRef } from "react";
<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
  useWindowDimensions,
  ScrollView, 
} from "react-native";

=======
import { StyleSheet, Text, View, Image, Animated, Pressable, Dimensions, ScrollView } from "react-native";

export default function Inicio() {
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;
  const scale3 = useRef(new Animated.Value(1)).current;
  const scale4 = useRef(new Animated.Value(1)).current;
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89

const HardwareItem = ({ source, text, scale }) => {
  const animate = (to) => {
    Animated.spring(scale, {
      toValue: to,
      useNativeDriver: true,
      friction: 4,
    }).start();
  };

  
  let imageSource;
  if (typeof source === 'number') {
    imageSource = source; // Se for require(), já é um número
  } else if (source.uri && source.uri.includes("placa_de_video")) {
    imageSource = require("../assets/placa_de_video.png");
  } else if (source.uri && source.uri.includes("placa_mae")) {
    imageSource = require("../assets/placa_mae.png");
  } else {
    imageSource = source; 
  }

  return (
    <Pressable
      onPressIn={() => animate(1.05)}
      onPressOut={() => animate(1)}
      style={styles.hardwareWrapper}
    >
      <Animated.View style={[styles.hard, { transform: [{ scale }] }]}>
        <View style={styles.imageContainer}>
          <Image 
            source={imageSource} 
            style={styles.imagem} 
            resizeMode="contain" 
          />
        </View>
        <Text style={styles.input}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default function Inicio() {
  const { width } = useWindowDimensions();
  const [texto, setTexto] = useState("");

  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;
  const scale3 = useRef(new Animated.Value(1)).current;
  const scale4 = useRef(new Animated.Value(1)).current;

  const isLargeScreen = width > 700;
  const caixaWidth = isLargeScreen ? 550 : "95%"; 
  const caixaHeight = isLargeScreen ? 250 : 320; 

  
  const hardwareData = [
    {
      scale: scale1,
      
      source: require("../assets/placa_de_video.png"), 
      text: "Placa De Vídeo ",
    },
    {
      scale: scale2,
      source: require("../assets/placa_mae.png"),
      text: "Placa Mãe ",
    },
    {
      scale: scale3,
      
      source: { uri: "https://cdn.awsli.com.br/2500x2500/2508/2508057/produto/205993563/1-lvjtrr.jpg" },
      text: "Processador AMD ",
    },
    {
      scale: scale4,
      source: { uri: "https://img.olx.com.br/images/37/374598577163702.jpg" },
      text: "Mouse Gamer ",
    },
  ];

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      
      {/* 1. Header Fixo */}
=======
    <ScrollView style={styles.container}>
      {/* HEADER */}
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

<<<<<<< HEAD
      {/* 2. ScrollView (Permite a rolagem do conteúdo) */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Caixa de texto principal */}
        <View style={[styles.caixaContainer, { width: caixaWidth, height: caixaHeight }]}>
          <View style={styles.caixa}>
            <Text style={styles.titulo}>O que é Hardware</Text>
            <Text style={styles.textocaixa}>
              "Hardware é a parte física do computador, ou seja, tudo o que você pode tocar. Inclui componentes como o monitor, teclado, mouse, processador, memória e placa-mãe. Essas peças trabalham juntas para que o computador funcione e execute os programas (que são o software). Em resumo, o hardware é o corpo do computador, enquanto o software é o cérebro que o faz agir."
            </Text>
          </View>
        </View>
        
        {/* Container Flexível para os Itens de Hardware */}
        <View style={styles.hardwareList}>
          {hardwareData.map((item, index) => (
            <HardwareItem
              key={index}
              source={item.source}
              text={item.text}
              scale={item.scale}
            />
          ))}
=======
      {/* TEXTO PRINCIPAL */}
      <View style={styles.content}>
        <View style={styles.caixa}>
          <Text style={styles.titulo}>Bem vindo</Text>

          <Text style={styles.textocaixa}>
            Este aplicativo fala sobre Hardware e seus componentes.
          </Text>

          <Text style={styles.textocaixa}>
            Hardware é a parte física do computador, ou seja, tudo aquilo que você pode tocar,
            como monitor, teclado, mouse, processador, memória e placa-mãe.
          </Text>
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
        </View>

<<<<<<< HEAD
      </ScrollView>
      
      
    </View>
=======
      {/* --- GRID 2x2 --- */}
      <View style={styles.grid}>

        {/* CARD 1 */}
        <Pressable
          onPressIn={() => animate(scale1, 1.1)}
          onPressOut={() => animate(scale1, 1)}
        >
          <Animated.View style={[styles.card, { transform: [{ scale: scale1 }] }]}>
            <Image source={require("../assets/placa_de_video.png")} style={styles.imagem} />
            <Text style={styles.cardText}>Placa de Vídeo</Text>
          </Animated.View>
        </Pressable>

        {/* CARD 2 */}
        <Pressable
          onPressIn={() => animate(scale2, 1.1)}
          onPressOut={() => animate(scale2, 1)}
        >
          <Animated.View style={[styles.card, { transform: [{ scale: scale2 }] }]}>
            <Image source={require("../assets/placa_mae.png")} style={styles.imagem} />
            <Text style={styles.cardText}>Placa Mãe</Text>
          </Animated.View>
        </Pressable>

        {/* CARD 3 */}
        <Pressable
          onPressIn={() => animate(scale3, 1.1)}
          onPressOut={() => animate(scale3, 1)}
        >
          <Animated.View style={[styles.card, { transform: [{ scale: scale3 }] }]}>
            <Image
              source={{ uri: "https://cdn.awsli.com.br/2500x2500/2508/2508057/produto/205993563/1-lvjtrr.jpg" }}
              style={styles.imagem}
            />
            <Text style={styles.cardText}>Processador</Text>
          </Animated.View>
        </Pressable>

        {/* CARD 4 */}
        <Pressable
          onPressIn={() => animate(scale4, 1.1)}
          onPressOut={() => animate(scale4, 1)}
        >
          <Animated.View style={[styles.card, { transform: [{ scale: scale4 }] }]}>
            <Image
              source={{ uri: "https://img.olx.com.br/images/37/374598577163702.jpg" }}
              style={styles.imagem}
            />
            <Text style={styles.cardText}>Mouse</Text>
          </Animated.View>
        </Pressable>

      </View>
    </ScrollView>
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(11, 5, 58)",
  },
<<<<<<< HEAD
  
  
  scrollContent: {
    alignItems: 'center', 
    paddingTop: 10,
    paddingBottom: 80, 
  },

  header: {
    width: "100%", 
    height: 70,
    backgroundColor: "rgb(0, 0, 0)",
=======

  header: {
    height: 90,
    backgroundColor: "black",
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 130, 252, 0.4)",
  },

  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
<<<<<<< HEAD
  
  
  caixaContainer: {
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
    marginBottom: 30, 
    marginTop: 10, 
  },
  caixa: {
    width: '95%',
    alignItems: "center",
    justifyContent: "center",
=======

  content: {
    alignItems: "center",
    marginTop: 20,
  },

  caixa: {
    width: "90%",
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 20,

    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.35)",
    elevation: 10,
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
  },

  titulo: {
    justifyContent: 'center',
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },

  textocaixa: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
<<<<<<< HEAD
  textocaixa: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "white",
    textAlign: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  
  
  hardwareList: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-around', 
    width: '100%', 
    paddingHorizontal: 10, 
  },

  hardwareWrapper: {
    marginBottom: 20, 
    width: '45%', 
    maxWidth: 250, 
  },

  
  hard: {
    flex: 1,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "rgba(225, 231, 238, 1)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 4, height: 5 },
    shadowRadius: 10,
    elevation: 6,
    minHeight: 250,
  },

  imageContainer: {
    width: "100%",
    height: 180, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  imagem: {
    width: "100%", 
    height: "100%", 
   borderRadius: 20,
    padding: 10,
     
  },
  
  input: {
    width: "100%", 
    height: 40,
    backgroundColor: "rgba(247, 252, 246, 0.1)",
    borderRadius: 10,
=======

  

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },

  card: {
    width: Dimensions.get("window").width * 0.49, // 42% da tela = perfeito para 2 colunas
    height: 260,
    backgroundColor: "rgb(23, 14, 92)",
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 12,

    borderWidth: 2,
    borderColor: "rgba(0, 130, 252, 0.35)",
    elevation: 10,

    padding: 10,
  },

  imagem: {
    width: "85%",
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },

  cardText: {
    backgroundColor: "rgba(0, 132, 255, 0.15)",
    width: "90%",
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
    textAlign: "center",
    textAlignVertical: 'center',
    lineHeight: 40,
    color: "white",
<<<<<<< HEAD
    fontFamily: "monospace",
    paddingHorizontal: 5,
    fontSize: 12,
  },

 
  footer: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, 
    backgroundColor: "rgb(0, 0, 0)", 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
=======
    padding: 6,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "monospace",
>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
  },
  footerItem: {
    color: 'white',
    fontSize: 12,
  }
});
<<<<<<< HEAD
=======




>>>>>>> eed8f1d726e92cdd406796ef6c01c5ac80119a89
