"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var appointment_service_1 = require("../../services/appointment.service");
var AppointmentComponent = (function () {
    function AppointmentComponent(appointmentService) {
        this.appointmentList = appointmentService.getInfo();
        console.log("AppointmentComponent.data:" + this.appointmentList);
    }
    return AppointmentComponent;
}());
AppointmentComponent = __decorate([
    core_1.Component({
        selector: 'appointment',
        templateUrl: './appointment.component.html',
        styleUrls: ['./appointment.component.css'],
        providers: [appointment_service_1.AppointmentService]
    }),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentComponent);
exports.AppointmentComponent = AppointmentComponent;
//# sourceMappingURL=appointment.component.js.map