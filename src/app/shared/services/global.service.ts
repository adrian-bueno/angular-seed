import { Injectable, Output, EventEmitter  } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as store from 'store';

@Injectable()
export class GlobalService {

    constructor(private http: Http) {
        
    }

}
