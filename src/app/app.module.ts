import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ApplicationModule } from './application/application.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FeaturesComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        AppRoutingModule,
        ApplicationModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot()
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
