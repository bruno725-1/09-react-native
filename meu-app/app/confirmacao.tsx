import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Confirmacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Pedido confirmado!
      </Text>

      <Text style={styles.mensagem}>
        Sua compra foi finalizada com sucesso.
      </Text>
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
    fontSize: 18,
    textAlign: 'center',
  },
});
