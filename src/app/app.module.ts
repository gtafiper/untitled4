import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {_MatMenuDirectivesModule, MatFormFieldModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {AngularFireModule} from '@angular/fire';
import { LoginComponent } from './Auth/login/login.component';

import { SignupComponent } from './Auth/signup/signup.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {firebaseConfig} from '../environments/info';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { DeleteUserComponent } from './Users/delete-user/delete-user.component';
import { UserCrudComponent } from './Users/user-crud/user-crud.component';




// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DeleteUserComponent,
    UserCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


