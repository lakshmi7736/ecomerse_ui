import { FileHandle } from "./file-handle.model";

export interface Product{

    productName: string,
    productDescription: string,
    category: string,
    quantity: any,
    productDiscountedPrice: any,
    productActualPrice: any,
    productImages: FileHandle[]

}