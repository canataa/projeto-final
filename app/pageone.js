import { withLayoutContext } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
              <Text style={styles.headerText}>Obrigatório</Text>
            </View>
      <View style={styles.main}>
        <Text style={styles.title}>Inicio</Text>
        <Text style={styles.subtitle}>Projeto de DDM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(11, 5, 58)",
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
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
