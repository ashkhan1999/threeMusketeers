import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../../main/main.css'],
  providers: [HomeService]
})
export class HomeComponent {
	data: Observable<Array<any>>;

	constructor(private service: HomeService) {
		this.data = service.getHomeInfo();
	}
  }
