// Aqui vamos substituir o botão atual por uma lista utilizando FlatList.
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useRouter } from 'expo-router';
import { produtos } from '../data/produtos';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Lista de Produtos
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              router.push({
                pathname: '/detalhe',
                params: { id: item.id }
              })
            }
          >
            <Text style={styles.texto}>
              {item.nome} - R$ {item.preco.toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#007AFF',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
});
