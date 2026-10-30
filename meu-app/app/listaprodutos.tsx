import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const produtos = [
  {
    nome: 'Camiseta',
    preco: 'R$ 59,90',
    descricao: 'Camiseta confortável para o dia a dia.',
  },
  {
    nome: 'Tênis',
    preco: 'R$ 299,00',
    descricao: 'Tênis de corrida confortável.',
  },
  {
    nome: 'Boné',
    preco: 'R$ 79,90',
    descricao: 'Boné ajustável para proteção solar.',
  },
];

export default function ListaProdutos() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Produtos</Text>

      {produtos.map((produto) => (
        <TouchableOpacity
          key={produto.nome}
          style={styles.botao}
          onPress={() =>
            router.push({
              pathname: '/detalhesproduto',
              params: {
                nome: produto.nome,
                preco: produto.preco,
                descricao: produto.descricao,
              },
            })
          }
        >
          <Text style={styles.texto}>{produto.nome}</Text>
        </TouchableOpacity>
      ))}
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
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
});
