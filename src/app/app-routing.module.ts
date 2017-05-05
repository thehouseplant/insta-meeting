import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ApplicationComponent } from './application/application.component';
import { DashboardComponent } from './application/components/dashboard/dashboard.component';
import { SchedulerComponent } from './application/components/scheduler/scheduler.component';
import { ProfileComponent } from './application/components/profile/profile.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { 
        path: 'application', 
        component: ApplicationComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'scheduler', component: SchedulerComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    },
    { path: '**', redirectTo: '/home' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }