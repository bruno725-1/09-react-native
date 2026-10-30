import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function DetalhesProduto() {
  const { nome, preco, descricao } = useLocalSearchParams<{
    nome: string;
    preco: string;
    descricao: string;
  }>();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: nome || 'Detalhes do Produto',
        }}
      />

      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.texto}>Preço: {preco}</Text>
      <Text style={styles.texto}>Descrição: {descricao}</Text>
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
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
});
