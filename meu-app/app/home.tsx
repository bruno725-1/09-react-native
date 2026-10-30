import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Bem-vindo ao nosso site!
      </Text>

      <Text style={styles.mensagem}>
        Altenticação realizada com sucesso.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.texto}>
          Sair
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
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  mensagem: {
    fontSize: 16,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#DC3545',
    padding: 15,
    borderRadius: 10,
  },

  texto: {
    color: '#fff',
    fontSize: 16,
  },
});
