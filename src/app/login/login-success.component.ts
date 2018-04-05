import {Component} from '@angular/core';
import {AuthenticationService} from './authentication.service'
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations <b> {{welcomename}} </b>, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
            </div>
    	`
})
 
export class LoginSuccessComponent {
 
public welcomename: string;

    constructor(
        private _service:AuthenticationService){

        }
 
    ngOnInit(){
        this._service.checkCredentials();
        this.welcomename = this._service.getUser().firstname + ' ' + this._service.getUser().lastname;
    }
 
    logout() {
        this._service.logout();
    }
}