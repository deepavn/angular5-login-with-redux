import { Action, ActionReducer } from '@ngrx/store';
import { User } from './user.model'

export class LoginAction implements Action {
  type: string;
  appUser: User; 
} 
