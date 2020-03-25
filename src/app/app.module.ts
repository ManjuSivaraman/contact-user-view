import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceService } from './auth-service.service';
import { AdminComponent } from './admin/admin.component';
import {ContactsComponent} from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
