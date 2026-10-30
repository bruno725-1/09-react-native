import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { useRouter } from 'expo-router';

export default function Carrinho() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tela do Carrinho de Compras
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.back()}
      >
        <Text style={styles.texto}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },

  texto: {
    color: '#fff',
    fontSize: 16,
  }
});
