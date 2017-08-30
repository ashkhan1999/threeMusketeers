import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable() 
export class HomeService {
	constructor(private http: Http) {}

	getHomeInfo(): Observable<any> {
		return this.http.get('./assets/home.json')
		.map((res:Response) => res.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
