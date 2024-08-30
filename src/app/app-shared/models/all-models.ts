export interface ProductModel {
    categoryId: string,
    _id: string,
    name: string, 
    price: number,
    quantity: number,
    quantityType: string,
    image:string, 
    counterInCart: number
}

export interface cartItem {
    _id: string,
    price: number,
    counter: number,
    isDeleted: boolean
}

export interface Category {
  _id: string;
  name: string;
  image: string;
}