import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css' ]
})

export class AdminComponent implements OnInit {

  constructor(public authService: AuthServiceService,
    private router: Router) { }

  adminForm = new FormGroup({
    emailAcc: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login() {
    this.authService.login(this.adminForm.value.emailAcc, this.adminForm.value.password);
  }

  signup() {
    this.authService.signup(this.adminForm.value.emailAcc, this.adminForm.value.password);
  }

  ngOnInit(): void {
  }

 

}
