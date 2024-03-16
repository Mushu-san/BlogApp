import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteModuleRoutingModule } from './cliente-module-routing.module';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ClienteModuleRoutingModule,
    IonicModule,

  ]
})
export class ClienteModuleModule { }
