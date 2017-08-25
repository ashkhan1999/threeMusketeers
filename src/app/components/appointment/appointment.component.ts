import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../services/appointment.service';


@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [AppointmentService]
})
export class AppointmentComponent {
  public appointmentList: any[]; // TODO: Appointment array

  constructor(appointmentService: AppointmentService) {
    this.appointmentList = appointmentService.getInfo();
    console.log("AppointmentComponent.data:" + this.appointmentList  );
  }
  }
