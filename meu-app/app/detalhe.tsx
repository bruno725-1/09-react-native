// Agora vem a parte mais interessante: recuperar o parâmetro e encontrar o produto correspondente.

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {
  useRouter,
  useLocalSearchParams
} from 'expo-router';

import { produtos } from '../data/produtos';

export default function Detalhe() {
  const router = useRouter();

  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const produto = produtos.find(
    (item) => item.id === id
  );

  return (
    <View style={styles.container}>
      {produto ? (
        <>
          <Text style={styles.titulo}>
            {produto.nome}
          </Text>

          <Text style={styles.preco}>
            Preço: R$ {produto.preco.toFixed(2)}
          </Text>
        </>
      ) : (
        <Text>Produto não encontrado.</Text>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/carrinho')}
      >
        <Text style={styles.texto}>
          Ver o Carrinho de Compras
        </Text>
      </TouchableOpacity>

      <Text>
        (O botão voltar aparece no topo automaticamente)
      </Text>
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
    marginBottom: 15,
  },
  preco: {
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
});
