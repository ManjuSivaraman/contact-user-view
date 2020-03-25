import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import {AdminComponent}  from './admin/admin.component';

const routes: Routes = [
  {
    path : '',
    component : AdminComponent
  },

 {
   path : 'home',
   component : ContactsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
