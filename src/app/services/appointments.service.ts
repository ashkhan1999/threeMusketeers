import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable() 
export class AppointmentsService {
    constructor(private http: Http) {}

    getInfo(): Observable<any> {
        return this.http.get('./assets/appointments.json')
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
}
