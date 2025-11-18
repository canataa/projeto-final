import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

// ----------------------------
// GPU NIVEL
// ----------------------------
const gpuNivel = {
  "GT 710": 5,
  "GT 730": 8,
  "GT 1030": 15,

  "GTX 750 Ti": 18,
  "GTX 950": 25,
  "GTX 960": 30,
  "GTX 970": 32,
  "GTX 980": 34,

  "GTX 1050": 35,
  "GTX 1050 Ti": 38,
  "GTX 1060": 42,
  "GTX 1650": 45,
  "GTX 1650 Super": 48,
  "GTX 1660": 50,
  "GTX 1660 Super": 52,
  "GTX 1660 Ti": 54,

  "RTX 2060": 60,
  "RTX 2060 Super": 63,
  "RTX 2070": 65,
  "RTX 2070 Super": 68,
  "RTX 2080": 72,
  "RTX 2080 Super": 75,
  "RTX 2080 Ti": 77,

  "RTX 3060": 70,
  "RTX 3060 Ti": 73,
  "RTX 3070": 76,
  "RTX 3070 Ti": 78,
  "RTX 3080": 82,
  "RTX 3080 Ti": 85,
  "RTX 3090": 88,
  "RTX 3090 Ti": 90,

  "RTX 4060": 78,
  "RTX 4060 Ti": 80,
  "RTX 4070": 86,
  "RTX 4070 Super": 88,
  "RTX 4070 Ti": 90,
  "RTX 4080": 94,
  "RTX 4080 Super": 95,
  "RTX 4090": 100
};

// ----------------------------
// CPU NIVEL
// ----------------------------
const cpuNivel = {
  "intel celeron g5900": 5,
  "intel pentium g4560": 10,
  "intel i3 4130": 12,
  "intel i3 6100": 16,
  "intel i3 7100": 18,
  "intel i3 10100": 25,
  "intel i3 12100": 40,

  "intel i5 2400": 15,
  "intel i5 3470": 18,
  "intel i5 4460": 22,
  "intel i5 6500": 28,
  "intel i5 7400": 30,
  "intel i5 8400": 38,
  "intel i5 9400f": 42,
  "intel i5 10400f": 45,
  "intel i5 11400f": 50,
  "intel i5 12400f": 60,

  "intel i7 2600": 25,
  "intel i7 3770": 28,
  "intel i7 4770": 32,
  "intel i7 6700": 36,
  "intel i7 7700": 40,
  "intel i7 8700": 48,
  "intel i7 10700": 60,
  "intel i7 12700": 75,

  "ryzen 3 1200": 15,
  "ryzen 3 2200g": 18,
  "ryzen 3 3200g": 22,
  "ryzen 3 4100": 28,
  "ryzen 3 5300g": 32,

  "ryzen 5 1400": 25,
  "ryzen 5 1600": 30,
  "ryzen 5 2600": 35,
  "ryzen 5 3400g": 32,
  "ryzen 5 3600": 45,
  "ryzen 5 4500": 40,
  "ryzen 5 4600g": 48,
  "ryzen 5 5500": 50,
  "ryzen 5 5600": 60,
  "ryzen 5 5600g": 55,
  "ryzen 5 7600": 80,

  "ryzen 7 1700": 38,
  "ryzen 7 2700": 42,
  "ryzen 7 3700x": 55,
  "ryzen 7 5700x": 65,
  "ryzen 7 5800x": 70,
  "ryzen 7 7800x3d": 100
};

// ----------------------------
// RAM NIVEL
// ----------------------------
const ramNivel = {
  "2": 2,
  "4": 4,
  "6": 6,
  "8": 8,
  "12": 12,
  "16": 16,
  "24": 24,
  "32": 32,
  "48": 48,
  "64": 64
};

// ----------------------------
// JOGOS
// ----------------------------
const jogosRequisitos = {
  "stardew valley": 5,
  "hotline miami": 5,
  "terraria": 5,
  "plants vs zombies": 5,
  "castle crashers": 5,

  "fortnite (modo desempenho)": 15,
  "valorant": 10,
  "league of legends": 12,
  "dota 2": 12,
  "team fortress 2": 12,
  "roblox": 10,

  "gta v": 25,
  "rocket league": 22,
  "apex legends": 28,
  "overwatch 2": 26,
  "rust": 30,

  "red dead redemption 2": 55,
  "hogwarts legacy": 60,
  "cyberpunk 2077": 65,
  "ark survival evolved": 50,
  "elden ring": 55,

  "minecraft (java)": 15,
  "fall guys": 18,
  "pubg": 30,
  "the witcher 3": 40,
  "far cry 5": 35,

  "battlefield 1": 30,
  "battlefield v": 40,
  "call of duty warzone": 55,
  "call of duty black ops 3": 30,
  "rainbow six siege": 20,

  "assassin's creed origins": 45,
  "assassin's creed odyssey": 50,
  "assassin's creed valhalla": 60,
  "forza horizon 4": 35,
  "forza horizon 5": 50,

  "dayz": 35,
  "metro exodus": 50,
  "remnant 2": 60,
  "starfield": 65,
  "the last of us part i (pc)": 65
};

export default function App() {
  const [gpu, setGpu] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [jogo, setJogo] = useState("");
  const [resultado, setResultado] = useState("");

  function verificar() {
    const jogoLower = jogo.toLowerCase();

    if (!jogosRequisitos[jogoLower]) {
      setResultado("Jogo não encontrado.");
      return;
    }

    if (!gpuNivel[gpu]) {
      setResultado("Placa de vídeo não encontrada.");
      return;
    }

    const cpuKey = cpu.toLowerCase().trim();
    if (!cpuNivel[cpuKey]) {
      setResultado("Processador não encontrado.");
      return;
    }

    const ramInt = parseInt(ram);
    if (!ramNivel[ramInt]) {
      setResultado("Quantidade de RAM inválida.");
      return;
    }

    const nivelJogo = jogosRequisitos[jogoLower];
    const nivelGpu = gpuNivel[gpu];
    const nivelCpu = cpuNivel[cpuKey];
    const nivelRam = ramNivel[ramInt];

    if (nivelGpu >= nivelJogo && nivelCpu >= nivelJogo && nivelRam >= 8) {
      setResultado("RODA ✓");
    } else {
      setResultado("NÃO RODA ✗");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificar compatibilidade</Text>

      <TextInput
        style={styles.input}
        placeholder="Placa de Vídeo (ex: GTX 1050 Ti)"
        onChangeText={setGpu}
      />

      <TextInput
        style={styles.input}
        placeholder="Processador (ex: Ryzen 5 5600G)"
        onChangeText={setCpu}
      />

      <TextInput
        style={styles.input}
        placeholder="Memória RAM (ex: 8)"
        onChangeText={setRam}
      />

      <TextInput
        style={styles.input}
        placeholder="Jogo (ex: Fortnite)"
        onChangeText={setJogo}
      />

      <TouchableOpacity style={styles.button} onPress={verificar}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(23, 14, 92)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  title: {
    color: "#fff",
    fontSize: 28,
    marginBottom: 20,
    fontFamily: "monospace"
  },

  input: {
    width: "90%",
    backgroundColor: "#4d4949ff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    color: "#fff"
  },

  button: {
    backgroundColor: "#0af",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "60%",
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  result: {
    color: "#fff",
    fontSize: 24,
    marginTop: 20
  }
});
