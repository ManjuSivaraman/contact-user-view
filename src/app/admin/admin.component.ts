import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthServiceService) { }

  adminForm = new FormGroup({
    emailAcc: new FormControl(''),
    password: new FormControl('')
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
