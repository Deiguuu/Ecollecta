import { Feather } from "@expo/vector-icons"; // ✅ Usamos Feather
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.logo}>ecollecta.</Text>

        <TouchableOpacity style={[styles.buttonBase, styles.googleButton]}>
          <Feather name="globe" size={20} color="#000" />
          <Text style={styles.googleText}>Continuar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonBase, styles.loginButton]}>
          <Text style={styles.loginText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8EF",
    justifyContent: "space-between",
  },
  centerContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "25%",
  },
  logo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 50,
    alignSelf: "flex-end",
  },
  // 🔹 Estilo base compartido por ambos botones
  buttonBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 2,
    width: 250, // ✅ Ambos botones del mismo ancho
    height: 45, // ✅ Misma altura
    marginBottom: 15,
  },
  googleButton: {
    // Podrías dejarlo vacío si ya usa el base
  },
  googleText: {
    marginLeft: 8,
    color: "#000",
    fontSize: 16,
  },
  loginButton: {
    // Ya hereda de buttonBase, no necesita más
  },
  loginText: {
    color: "#000",
    fontSize: 16,
  },

},
);
