export type GameBundleRow = {
  id: string
  name: string
  price: number
  items: Array<{ item: string; quantity: number }>
  totalGemValue: number
}
