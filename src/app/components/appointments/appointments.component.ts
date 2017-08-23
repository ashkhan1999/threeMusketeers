import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  providers: [AppointmentsService]
})
export class AppointmentsComponent {
  data: Observable<Array<any>>;

  constructor(private service: AppointmentsService) {
    this.data = service.getInfo();
    console.log("AppointmentsComponent.data:" + this.data);
  }
  }
