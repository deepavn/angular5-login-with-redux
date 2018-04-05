
import { Action, ActionReducer } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

import { LoadState, SaveState } from '../shared/local-storage'
import { AppState } from '../app.state'

import { LoginAction } from './login.action'

import { User } from './user.model'

export const LOGINSUCCESSFUL = '[login] LOGINSUCCESSFUL';
export const LOGINFAILED = '[login] LOGINFAILED';
export const RESET = '[login] RESET';

let localStorageUser: User
localStorageUser = LoadState()
console.log(localStorageUser);

export const initialUserState: User =
    (localStorageUser != undefined) // condition: Verify the local-storage values of the user
        ?  // If localstorage value is satisfied by the specified condition
        {
            email: localStorageUser.email,
            password: "",
            firstname: localStorageUser.firstname,
            lastname: localStorageUser.lastname
        }

        :  // else If localstorage value is NOT satisfied by the specified condition, then default values
        {

            email: "",
            password: "",
            firstname: "",
            lastname: ""
        }

export function LoginReducer(myuser: User = initialUserState, myLogin: LoginAction) {

    //export const CartReducer: ActionReducer<Cart> = (myCart: Cart = initialCartState, myCartItem: CartAction) => {
    switch (myLogin.type) {

        case LOGINSUCCESSFUL:
            let thisUser: User = new User // create a new user to perform the changes in the user details
            
            console.log("In loginsuccess" + myLogin)
            
            thisUser.email = myLogin.appUser.email
            thisUser.firstname = myLogin.appUser.firstname
            thisUser.lastname = myLogin.appUser.lastname
            thisUser.password = ""

            SaveState(thisUser) // save the new user to local-storage
            return thisUser

        case LOGINFAILED:

            let thisUserF: User = new User // create a new user to perform the changes in the user details

            thisUserF = ({
                email: ""
                , password: ""
                , firstname: ""
                , lastname: ""
            })
            SaveState(thisUserF)
            return thisUserF


        case RESET:
            let thisUserR: User = new User // create a new user to perform the changes in the user details
            thisUserR = ({
                email: ""
                , password: ""
                , firstname: ""
                , lastname: ""
            })
            SaveState(thisUserR)
            return thisUserR;

        default:
            return myuser;
    }
}


