import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated, Pressable, Dimensions, ScrollView } from "react-native";

export default function Inicio() {
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
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

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
        </View>
      </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(11, 5, 58)",
  },

  header: {
    height: 90,
    backgroundColor: "black",
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
    textAlign: "center",
    color: "white",
    padding: 6,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "monospace",
  },
});




