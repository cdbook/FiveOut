import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ViewsModule } from '../viewsmodule/views.module';
import { Utils } from '../utils';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { DataAdaptorModule } from '../dataadaptor/data-adaptor.module';
import { SharedModule } from '../shared/shared.module';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule(
            { 
                declarations: [AppComponent],
                imports: [CommonModule, FormsModule, HttpModule, RouterModule, ViewsModule, routing, SharedModule, DataAdaptorModule],
                providers: [Utils] 
            }
        );
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
