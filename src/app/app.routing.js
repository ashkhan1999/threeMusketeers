"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var message_component_1 = require("./components/message/message.component");
var appointments_component_1 = require("./components/appointments/appointments.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'messages',
        component: message_component_1.MessageComponent
    },
    {
        path: 'appointments',
        component: appointments_component_1.AppointmentsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map