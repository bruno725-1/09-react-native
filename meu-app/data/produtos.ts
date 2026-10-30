export interface Produto {
  id: string;
  nome: string;
  preco: number;
}
// Vamos cadastrar três produtos:
export const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Camiseta',
    preco: 59.90,
  },
  {
    id: '2',
    nome: 'Tênis',
    preco: 299.90,
  },
  {
    id: '3',
    nome: 'Boné',
    preco: 79.90,
  },
];
