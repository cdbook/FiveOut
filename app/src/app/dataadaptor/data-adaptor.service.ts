import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IStorage } from './istorage';

@Injectable()
export class DataAdaptorService implements IStorage {
    private storageService: IStorage;
    constructor(localStorageService: LocalStorageService) {
        this.storageService = localStorageService;
    }

    getValue(key: string): Promise<string> {
        return this.storageService.getValue(key);
    }

    setValue(key: string, value: string): Promise<any> {
        return this.storageService.setValue(key, value)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                return err;
            });
    }

    clear(key: string, destroy?: boolean): Promise<any> {
        return this.storageService.clear(key, destroy);
    }
}
