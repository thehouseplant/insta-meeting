import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ApplicationRouter } from './application-routing.module';

import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [
        ApplicationComponent,
        DashboardComponent,
        SchedulerComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
        ApplicationRouter
    ]
})

export class ApplicationModule { }
