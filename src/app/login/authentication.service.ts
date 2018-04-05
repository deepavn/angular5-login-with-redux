import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';

import { LoadState, SaveState } from '../shared/local-storage'
import { AppState } from '../app.state'
import { User } from './user.model'

import { LOGINSUCCESSFUL, LOGINFAILED, RESET } from './login.reducer';
import { LoginAction } from './login.action'

// The below can be a json file or from database

var users: User[] = [{
  email: 'admin@admin.com',
  password: 'adm9',
  firstname: "Radha",
  lastname: "Krishna"
},
{
  email: 'user1@gmail.com',
  password: 'a23',
  firstname: "Sita",
  lastname: "Rama"

}
]

@Injectable()
export class AuthenticationService {


  constructor(private store: Store<AppState>, private _router: Router) {
  }


  getUser(): User {

    let myData: User;
    let myData$: Observable<User>;

    this.store.select<User>(x => x.TheUser).subscribe(data => myData = data)
    console.log(myData)
    return myData
  }




  logout() {
    this.store.dispatch({ type: RESET });
    //localStorage.removeItem("user");
    this._router.navigate(['login']);

  }

  login(myUser: User) {
    console.log("In service: " + myUser)
    var authenticatedUser = users.find(u => u.email === myUser.email);

    if (authenticatedUser && authenticatedUser.password === myUser.password) {

      this.store.dispatch<LoginAction>({ type: LOGINSUCCESSFUL, appUser: authenticatedUser });
      //  localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['login-successful']);
      return true;
    }
    this.store.dispatch<LoginAction>({ type: LOGINFAILED, appUser: myUser });
    return false;

  }

  checkCredentials() {
    console.log(this.getUser());
    //if (localStorage.getItem("user") === null) 
    if (this.getUser() == undefined) {
      
      this._router.navigate(['login']);
    }
  }
}