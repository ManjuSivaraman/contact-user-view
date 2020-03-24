import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  // user; 

  constructor(private firebaseAuth: AngularFireAuth) {
    // this.user = firebaseAuth.authState;
   }

   login(emailAcc: string, password: string) {
     console.log("auth", this.firebaseAuth.auth)
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(emailAcc, password)
      .then(value => {
        console.log('Login Success' , value);
      })
      .catch(err => {
        console.log('Login Err', err.message);
      });
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sign Up Success', value);
      })
      .catch(err => {
        console.log('Sign Up Err:', err.message);
      });    
  }
  
}
