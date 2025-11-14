export interface Course {
  id:number,
  title:string,
  description:string,
  price:number,
  date:string,
  imageUrl?:string,
  soldOut?:boolean,
  onSale?:boolean
}
