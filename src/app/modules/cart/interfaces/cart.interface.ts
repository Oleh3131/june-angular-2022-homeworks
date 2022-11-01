export interface ICart {

  id: number,
  userId: number,
  date: string,
  products: IProducts[],
  __v: number

}

interface IProducts {

  productId: number,
  quantity: number

}
