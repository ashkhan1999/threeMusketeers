import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable() 
export class AppointmentService {
    constructor(private http: Http) {}

    getInfo(): Observable<any> { // TODO: rename to something feasable
        return this.http.get('./assets/appointment.json')
        .map((res:Response) => res.json()) // TODO: map to Apppointement
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
}

export class Appointment { // TODO: create Models folder and move Appointement to it
	month : string
	groupName: string
	isVisible: boolean
	name: string
	summary: string
	description: string
	date: string
}
