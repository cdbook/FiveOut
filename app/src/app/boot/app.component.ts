import { Component, ViewContainerRef, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { APP_READY, DataStore } from '../utils';
import '../../../assets/css/styles.styl';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(private dataStore: DataStore, private viewContainerRef: ViewContainerRef) { }

    ngOnInit() {
        // let ng2-bootstrap know we are using bootstrap v4
        window['__theme'] = 'bs4';


    }

    ngOnDestroy() {
    }
}
