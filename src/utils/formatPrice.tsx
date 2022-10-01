export function formatPrice(price: number) {
  return new Intl.NumberFormat('pt-BR', {}).format(price);
}
