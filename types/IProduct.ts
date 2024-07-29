export interface IProduct {
    id: number
    image: string
    name: string
    category: string
    description: string
    price: number
    quantity?: number
    orders: number
}