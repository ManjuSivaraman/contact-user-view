import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private firebaseAuth: AngularFireAuth,
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
        console.log('Login Success', value);
      })
      .catch(err => {
        this.showsigninError()
        console.log('Login Err', err.message);
      });
  }

  signup(emailsignupAcc: string, signuppassword: string , callback) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(emailsignupAcc, signuppassword)
      .then(contactData => {
        callback(contactData);
      }).catch(contacterr => {
        console.log("err" , contacterr)
        this.showsignupError()
      });
  }

  showsigninError() {
    this.toastr.error('Login ID or Passward is incorrect');
  }
  showsignupError() {
    this.toastr.error('Please Sign Up a proper value');
  }

}
