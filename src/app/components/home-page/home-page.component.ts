import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [HomePageService]
})
export class HomePageComponent {
	data: Observable<Array<any>>;

	constructor(private service: HomePageService) {
		this.data = service.getInfo();
		console.log("HomeComponent.data:" + this.data);
	}
  }
