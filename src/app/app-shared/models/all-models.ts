export interface ProductModel {
    catId: string,
    id: string,
    name: string, 
    price: number,
    quantity: number,
    imgLink:string, 
    counterInCart: number
  }

  export interface cartItem {
    id: string,
    price: number,
    counter: number,
    isDeleted: boolean
  }