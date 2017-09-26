import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { DataAdaptorModule } from '../dataadaptor/data-adaptor.module';
import { ViewsModule } from '../viewsmodule/views.module';
import { Utils } from '../utils';
import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';
import { TabsModule, ButtonsModule, DropdownModule, ModalModule, CarouselModule, TooltipModule, AccordionModule } from 'ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DataAdaptorModule,
        routing,
        ViewsModule,
        TabsModule.forRoot(), 
        ButtonsModule.forRoot(), 
        DropdownModule.forRoot(), 
        ModalModule.forRoot(), 
        CarouselModule.forRoot(), 
        TooltipModule.forRoot(), 
        AccordionModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [Utils, ComponentLoaderFactory],
    bootstrap: [AppComponent]
})
export class AppModule { }
