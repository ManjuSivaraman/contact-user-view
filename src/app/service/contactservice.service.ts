import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactserviceService {

  constructor(private http : HttpClient ) { }

  addContact(contacts){
    return this.http.post('https://node-apitest-inclabs.herokuapp.com/create' , contacts);
  }

  getcontacts(){
    return this.http.get('https://node-apitest-inclabs.herokuapp.com/read');
  }
}
