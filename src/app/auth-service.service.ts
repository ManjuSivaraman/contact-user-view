import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private firebaseAuth: AngularFireAuth , 
    private router: Router,
    private toastr: ToastrService) {
    // this.user = firebaseAuth.authState;
   }

   login(emailloginAcc: string, loginpassword: string) {
     console.log("auth", this.firebaseAuth.auth)
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(emailloginAcc, loginpassword)
      .then(value => {
        this.router.navigateByUrl('/home');
        console.log('Login Success' , value);
      })
      .catch(err => {
        this.showError()
        console.log('Login Err', err.message);
      });
  }

  signup(emailsignupAcc: string, signuppassword: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(emailsignupAcc, signuppassword)
      .then(value => {
        console.log('Sign Up Success', value);
      })
      .catch(err => {
        console.log('Sign Up Err:', err.message);
      });    
  }

  showError(){
    this.toastr.error('Login ID or Passward is incorrect');
}

}
