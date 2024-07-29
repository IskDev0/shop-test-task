import type {IProduct} from "~/types/IProduct";

export interface ICartItem extends IProduct {
    quantity: number
}