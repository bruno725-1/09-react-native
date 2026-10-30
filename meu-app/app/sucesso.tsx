import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro concluído!</Text>
      <Text>Parabéns! Seu perfil foi cadastrado com sucesso.</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.dismissAll()}
      >
        <Text style={styles.texto}>
          Concluir e Voltar ao início
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
  botao: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
