import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AboutComponent} from "./about/about.component";
import {ProductsComponent} from "./products/products.component";
import { MyFisrtCompComponent } from './my-fisrt-comp/my-fisrt-comp.component';
import { NewProductComponent } from './new-product/new-product.component';


const routes: Routes = [
  {
    path: 'home',
    component: MyFisrtCompComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'new-product',
    component:NewProductComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }