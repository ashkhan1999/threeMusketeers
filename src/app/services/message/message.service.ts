import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageServices{

    constructor(private http: Http) {
         var obj;
         this.getMessages().subscribe(data => obj=data, error => console.log(error));
    }

    public getMessages(): Observable<any> {
         return this.http.get("assets/messages.json")
                         .map((res:any) => res.json());

     }
}