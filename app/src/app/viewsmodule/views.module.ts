import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule, ButtonsModule, DropdownModule, ModalModule, CarouselModule, TooltipModule, AccordionModule } from 'ng2-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DataStore } from '../utils';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG }  from '@angular/platform-browser';

// load isomer app components
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClickOutsideDirective } from './clickoutsidedirective/clickoutside.directive';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ButtonsModule,
        TabsModule,
        ModalModule,
        CarouselModule,
        DropdownModule,
        TooltipModule,
        AccordionModule,
        SharedModule
    ],
    declarations: [
        IntroComponent,
        DashboardComponent,
        ClickOutsideDirective
],
    exports: [
        IntroComponent,
        DashboardComponent,
        ClickOutsideDirective
    ],
    providers: [
        DataStore
    ]
})
export class ViewsModule { }
 