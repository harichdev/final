import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { AuthService } from '../../auth.service';
import { AuthGuard } from '../../auth-guard.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    CommonModule,
    FormsModule
   ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [ AuthService, AuthGuard ]
})
export class PagesModule { }
