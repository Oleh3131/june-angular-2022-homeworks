export interface ICard {

  id: number,
  userId: number,
  date: string,
  products: IProduct[],
  __v: number

}


interface IProduct {

  productId: number,
  quantity: number

}

