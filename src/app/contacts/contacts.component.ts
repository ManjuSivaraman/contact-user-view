import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactserviceService } from '../service/contactservice.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  gender = ["Male", "Female"];

  constructor(private contact: ContactserviceService) { }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })
  })

  onSubmit() {
    var contacts = this.contactForm.value;
    console.log("Contacts" , contacts )
    var addCon = this.contact.addContact(contacts)

    console.log('addcon' , addCon)
    addCon.subscribe(
      responce => {
        console.log("Add Responce", responce)
      },
      err => {
        console.log("add err", err)
      })
  }

  ngOnInit(): void {
    var getcon = this.contact.getcontacts();
    getcon.subscribe(
      responce => {
        console.log("Get Responce", responce)
      },
      err => {
        console.log("Get err", err)
      })
  }


}
