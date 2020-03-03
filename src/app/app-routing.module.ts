import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Auth/login/login.component';
import {SignupComponent} from './Auth/signup/signup.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: 'login',
  component: LoginComponent
  },
  {
    path: 'signUp',
   component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
