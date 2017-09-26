import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';
import { DataStore, Utils, EVENTS, ROUTES} from '../../utils';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.styl'],
})

export class IntroComponent implements OnInit, OnDestroy {
    
    constructor(private router: Router, private dataStore: DataStore) { };

    ngOnInit() {
    }


    ngOnDestroy() {

    }

    navigateToNextPage(){
        
    }

}
