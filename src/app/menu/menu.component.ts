import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
//inject route service
 constructor(private router:Router){



 }



navigatetoaboute(){
this.router.navigate(['about']);

}





}
