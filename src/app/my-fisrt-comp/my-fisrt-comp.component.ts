import { Component } from '@angular/core';
import { MyfirstService } from '../services/myfirst.service';

@Component({
  selector: 'app-my-fisrt-comp',
  templateUrl: './my-fisrt-comp.component.html',
  styleUrls: ['./my-fisrt-comp.component.scss']
})
export class MyFisrtCompComponent {
name:string="";
lastname:string="";
email:string="";
isSubmitted = false ;
messages :Array<any>=[];
    
constructor(private service:MyfirstService){

this.messages = this.service.getAllMessages();
   this.isSubmitted =this.messages.length>0;

}


onSubmit(){
this.isSubmitted = true;
this.service.insert({
'name':this.name,
'lastname':this.lastname,
'email':this.email
});
console.log(this.messages);
}

deleteMessage( index:number){
this.service.deleteMessage(index);
}


}
