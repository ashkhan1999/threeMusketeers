"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var message_component_1 = require("./components/message/message.component");
var appRoutes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'home' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'messages', component: message_component_1.MessageComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map