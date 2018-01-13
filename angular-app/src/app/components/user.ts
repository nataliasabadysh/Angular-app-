 //export interface User{
 // id: number, name: string, email: string
//}
// или можно использовать через классы

export class User{
  constructor(
    public id:number,
    public name:string,
    public email:string,
  ){}

 }
