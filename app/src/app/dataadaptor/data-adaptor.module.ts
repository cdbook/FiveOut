import { NgModule } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { DataAdaptorService } from './data-adaptor.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [HttpModule],
    declarations: [],
    exports: [],
    providers: [DataAdaptorService, LocalStorageService]
})

export class DataAdaptorModule { }