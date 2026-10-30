import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tela de Login
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace('/home')}
      >
        <Text style={styles.texto}>
          Entrar
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
    fontSize: 24,
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
  },
});
