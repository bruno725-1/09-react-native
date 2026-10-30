import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Etapa1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Etapa 1: Nome</Text>
      <Text>Informe seu nome.</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/etapa2')}
      >
        <Text style={styles.texto}>Avançar</Text>
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
  botao: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
});
