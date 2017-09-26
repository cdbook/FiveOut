import { Injectable, EventEmitter } from '@angular/core';
import { Router, Route, UrlTree, UrlSegment } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router/src/url_tree'; 
import { Dictionary } from './dictionary';
import * as Collections from 'typescript-collections';

@Injectable()
export class Utils {
    private _emitters: Dictionary = {};
    constructor(private router:Router) {}

    private createObservableFor(key: string, isSynchronous:boolean): EventEmitter<any> {
        let emitter: EventEmitter<any> = new EventEmitter(!isSynchronous);
        this._emitters[key] = emitter;
        return emitter;
    }

    getObservable(key:string, isSynchronous:boolean = false): EventEmitter<any> {
        if (this.hasEmitter(key)) {
            return this._emitters[key];
        }
        return this.createObservableFor(key, isSynchronous);
    }


    hasEmitter(key: string): boolean {
        if (this._emitters[key] !== undefined) {
            return true;
        }
        return false;
    }

    stringifyDictionary(dict:Collections.Dictionary<any, any>): string {
        var _dict:Dictionary = new Dictionary();
        dict.forEach((key, value) => {
            _dict[key] = value;
        })
        return JSON.stringify(_dict);
    }

    dictionaryToArray(dict: Collections.Dictionary<any, any>): Array<any> {
        let returnArray: Array<any> = [];
        dict.forEach((key, value) => {
            returnArray.push(value);
        });

        return returnArray;
    }
}