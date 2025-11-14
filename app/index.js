import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Animated,
  Pressable,
  ScrollView,
} from "react-native";

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
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* TEXTO PRINCIPAL */}
        <View style={styles.caixa}>
          <Text style={styles.titulo}>O que é Hardware</Text>
          <Text style={styles.textocaixa} >
            
            Hardware é a parte física do computador, ou seja, tudo o que você pode tocar.
Inclui componentes como o monitor, teclado, mouse, processador, memória e placa-mãe.
Essas peças trabalham juntas para que o computador funcione e execute os programas (que são o software).
Em resumo, o hardware é o corpo do computador, enquanto o software é o cérebro que o faz agir.
            </Text>
         
        </View>

        
        <View style={styles.linha}>
          
          <Pressable
            onPressIn={() => animate(scale1, 1.07)}
            onPressOut={() => animate(scale1, 1)}
            style={styles.coluna}
          >
            <Animated.View style={[styles.card, { transform: [{ scale: scale1 }] }]}>
              <Image
                source={{
                  uri: "https://cdn.awsli.com.br/2500x2500/1271/1271561/produto/208747449/placa-de-video-nvidia-asus-rog-strix-rtx-4080-oc-edition-1-wiuzyk.jpg",
                }}
                style={styles.imagem}
              />
              <Text style={styles.cardText}>RTX 4080</Text>
            </Animated.View>
          </Pressable>

          {/* CARD 2 */}
          <Pressable
            onPressIn={() => animate(scale2, 1.07)}
            onPressOut={() => animate(scale2, 1)}
            style={styles.coluna}
          >
            <Animated.View style={[styles.card, { transform: [{ scale: scale2 }] }]}>
              <Image
                source={{
                  uri: "https://cdn-hardstore.s3-sa-east-1.amazonaws.com/20353/1280x960/1.webp",
                }}
                style={styles.imagem}
              />
              <Text style={styles.cardText}>B550M AORUS</Text>
            </Animated.View>
          </Pressable>
        </View>

        <View style={styles.linha}>
          {/* CARD 3 */}
          <Pressable
            onPressIn={() => animate(scale3, 1.07)}
            onPressOut={() => animate(scale3, 1)}
            style={styles.coluna}
          >
            <Animated.View style={[styles.card, { transform: [{ scale: scale3 }] }]}>
              <Image
                source={{
                  uri: "https://cdn.awsli.com.br/2500x2500/2508/2508057/produto/205993563/1-lvjtrr.jpg",
                }}
                style={styles.imagem}
              />
              <Text style={styles.cardText}>Ryzen 9 7950X</Text>
            </Animated.View>
          </Pressable>

          {/* CARD 4 */}
          <Pressable
            onPressIn={() => animate(scale4, 1.07)}
            onPressOut={() => animate(scale4, 1)}
            style={styles.coluna}
          >
            <Animated.View style={[styles.card, { transform: [{ scale: scale4 }] }]}>
              <Image  style={styles.imagem}
                source={{
                  uri: "https://img.olx.com.br/images/37/374598577163702.jpg",
                }}
               
              />
              <Text style={styles.cardText}>Mouse RGB</Text>
            </Animated.View>
          </Pressable>
        </View>

      </ScrollView>
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
    backgroundColor: "rgb(23, 14, 92)",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "rgb(255, 255, 255)",
    fontSize: 32,
    fontWeight: "bold",
    
  },

  scroll: {
    paddingVertical: 20,
    alignItems: "center",
  },

  
  caixa: {
    width: "90%",
    backgroundColor: "rgb(23, 14, 92)",
    padding: 15,
    borderRadius: 20,
    marginBottom: 30,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },

  textocaixa: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    fontFamily: 'monospace',
  },

 
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },

  coluna: {
    width: "48%",
  },
  card: {
    backgroundColor: "rgb(23, 14, 92)",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    elevation: 8,
    
  },
  imagem: {
    width: "100%",
    height: 140,
   padding: 10,
    borderRadius: 20,
   
  },

  cardText: {
    marginTop: 10,
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontFamily: "monospace",
  },
});


