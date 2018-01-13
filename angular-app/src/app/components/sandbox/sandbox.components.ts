import {Component} from "@angular/core";

import {User} from "../User";

@Component({
  selector:'sandbox',
  template: `<h1>Hello {{ name }}! I am  {{ age }}</h1>
  `
})

export class SandboxComponents{
  name:string = 'Natasha';
  age:number = 25;
  hasChildren:boolean = false;
  city:any = 'Kiev';
  numberArray:number[] = [1, 2, 3];
  stringArray:string[] = ['one', 'two'];
  anyArray:any[] = ['one', 'two', 1];
  myTyple:[string, number] = ['one' , 1];
  unusable:void = undefined; // null

  user:User;
  users:User[];//- массив

  constructor(){
    this.user = {
      id: 1,
      name:'Natasha user1',
      email:'text'
      };

    this.users = [
      {
        id: 2,
        name:'Natasha user2',
        email:'text'
      },
      {
        id: 3,
        name:'Natasha user3',
        email:'text'
      }
    ]
    }
  }

