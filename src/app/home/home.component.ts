import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

    constructor(private globalService: GlobalService) {

    }

    ngOnInit() {

    }
}
