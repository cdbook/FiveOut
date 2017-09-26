import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { APP_READY, DataStore, EVENTS } from '../../utils';

@Component({
    selector: 'splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.styl']
})

export class SplashComponent implements OnInit {
    title: string = 'Loading...';
    progress: number = 0;
    progressMessage: string = "Loading model..."
    constructor(private router: Router, private dataStore: DataStore) { };

    ngOnInit() {
        let self = this,
            stateUrl = '',
            urlTree: UrlTree = null
    }

    loadingProgress(progressOb:any) {
        this.progress = progressOb.numComplete / progressOb.numTotal;
    }

    progressCb(self: SplashComponent) { 
        return function(progress:any) {
            self.loadingProgress(progress); 
            if (parseInt(self.progress+"") === 1) {
                self.progressMessage = "Initializing model..."; 
            }
        }
        
    }
}