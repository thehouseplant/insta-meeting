import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-scheduler',
    templateUrl: './scheduler.component.html',
    styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
    public yearlyView: boolean;
    public monthlyView: boolean;
    public weeklyView: boolean;
    public dailyView: boolean;

    constructor() { }

    ngOnInit() {
        this.yearlyView = true;
        this.monthlyView = false;
        this.weeklyView = false;
        this.dailyView = false;
    }
}
