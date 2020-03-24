import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AdminComponent
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
