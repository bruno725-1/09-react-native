import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Início' }}
      />

      <Stack.Screen
        name="detalhe"
        options={{ title: 'Detalhes do Produto' }}
      />

      <Stack.Screen
        name="carrinho"
        options={{ title: 'Meu Carrinho' }}
      />

      <Stack.Screen
        name="confirmacao"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="login"
        options={{ title: 'Login' }}
      />

      <Stack.Screen
        name="home"
        options={{ title: 'Home' }}
      />

      <Stack.Screen name="etapa1" options={{ title: 'Etapa 1 - Nome' }} />
      <Stack.Screen name="etapa2" options={{ title: 'Etapa 2 - E-mail' }} />
      <Stack.Screen name="etapa3" options={{ title: 'Etapa 3 - Senha' }} />
      <Stack.Screen name="sucesso" options={{ title: 'Cadastro concluído' }} />
    </Stack>
  );
}
