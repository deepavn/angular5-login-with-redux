
import { ModuleWithProviders, NgModule, Pipe, PipeTransform } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { AuthenticationService } from "./authentication.service"
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginSuccessComponent } from './login-success.component';

const LoginRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'login', component: LoginComponent } ,
  { path: 'login-successful', component: LoginSuccessComponent } 
]);

@NgModule({
  imports: [
    SharedModule,
    LoginRouting 
  ],
  exports: [LoginComponent, LoginSuccessComponent],
  declarations: [LoginComponent, LoginSuccessComponent],
  providers: [AuthenticationService]
})
export class LoginModule { }