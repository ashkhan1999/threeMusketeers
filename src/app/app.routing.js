"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var message_component_1 = require("./components/message/message.component");
var appRoutes = [
    {
        path: 'messages',
        component: message_component_1.MessageComponent
    },
    {
        path: '',
        component: app_component_1.AppComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map