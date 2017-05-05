import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public loggedIn: boolean;
    public emailRegister: boolean;

    constructor() { }

    ngOnInit() {
        this.loggedIn = false;
        this.emailRegister = true;
    }
}
