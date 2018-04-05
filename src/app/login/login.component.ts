import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from './authentication.service'
import {User} from './user.model'
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './login.component.html'
})
 
export class LoginComponent {
 
     public user = new User; 
    
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {
        
        }

        ngOnInit(){
         
        }
     
 
    login() {
        if(!this._service.login(this.user))
        {
            this.errorMsg = 'Failed to login';
        }
    }
}