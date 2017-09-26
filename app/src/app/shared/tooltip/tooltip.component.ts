import { Component, OnInit, Input, HostListener, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Utils, DataStore } from '../../utils';
import { TooltipDirective } from 'ng2-bootstrap';

@Component({
    selector: 'my-tooltip',
    templateUrl: './tooltip.html',
    styleUrls: ['./tooltip.styl']
})

export class TooltipComponent implements OnInit {
    private tooltipClass: string = 'tooltipHide';
    @Input() tooltipPlacement: string = '';
    @Input() tooltipText: string = '';
    @Input() useAsInnerHtml:boolean = false;
    @ViewChild('tt') tooltipRef : TooltipDirective;

    constructor(private utils: Utils, private _elementRef : ElementRef) { }
    
    ngOnInit() {
    }

    @HostListener('document:touchend', ['$event.target'])
    public onClick(targetElement) {
        if(!this.tooltipRef.isOpen){
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside && this.tooltipRef.isOpen) {
            this.tooltipRef.hide();
        }
    }
}
