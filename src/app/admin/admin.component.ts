import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  show = true;

  constructor(public authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService) { }

  adminloginForm = new FormGroup({
    emailloginAcc: new FormControl(''),
    loginpassword: new FormControl('')
  })


  adminsignupForm = new FormGroup({
    UserName : new FormControl(''),
    emailsignupAcc: new FormControl(''),
    signuppassword: new FormControl('')
  })

  login() {
    this.authService.login(this.adminloginForm.value.emailloginAcc, this.adminloginForm.value.loginpassword);
  }

  signup() {
    this.authService.signup(this.adminsignupForm.value.emailsignupAcc, this.adminsignupForm.value.signuppassword , calbackSignupresponce => {
      if(calbackSignupresponce){
        this.show = true;
        this.showsignupsuccess()
      }         
    });
  }

  showsignupsuccess() {
    this.toastr.success('Account created successfully');
  }
  
  ngOnInit(): void {
  }

  signupForm() {
    this.show = false;
  }

  signinForm() {
    this.show = true;
  }


}
