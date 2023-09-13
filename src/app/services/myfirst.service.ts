import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyfirstService {

messages:Array<any>=[];



  constructor() { 
    this.Init();
  
  }

  Init(){
    this.insert({
      name:"ali",
      lastname:"dheker",
      email:"dhekerlaadhibi@gml.com",
    })


    this.insert({
      name:"alibou",
      lastname:"ali",
      email:"alibou@gmail.com",
    })



  }

insert( message:{name:string ,email:string,lastname:string}){

this.messages.push(message);

}

getAllMessages(){

  return this.messages
}
deleteMessage(index:number)
  {
this.messages.splice(index,1)
  }








}
