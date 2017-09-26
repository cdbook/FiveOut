import { Component, Input, OnInit, EventEmitter, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { DataStore, Utils, EVENTS, ROUTES } from '../../utils';
import { ModalDirective } from 'ng2-bootstrap';
import { Router, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';
import { DataAdaptorService } from '../../dataadaptor/data-adaptor.service'

@Component({
    selector: 'im-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.styl']
})

export class DashboardComponent {
    private routeObserver: any;


    constructor(private dataStore: DataStore, private utils: Utils, private router:Router, private dataAdaptor: DataAdaptorService) { };

    ngOnInit() {
        let self = this;
        
        self.onRouteChange();
        this.routeObserver = this.router.events.subscribe((val) => {
            if(val instanceof NavigationEnd){
                self.onRouteChange();
            }            
        });
    }

    onRouteChange(){
        
    }

    ngOnDestroy() {
        this.routeObserver.unsubscribe();
    }
    

    resetData() {
        this.dataAdaptor.clear(null, true).then(()=>{
            window.location.reload();
        });
    }
}
