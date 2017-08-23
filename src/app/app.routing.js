"use strict";
var router_1 = require("@angular/router");
var home_page_component_1 = require("./components/home-page/home-page.component");
var message_component_1 = require("./components/message/message.component");
var appRoutes = [
    {
        path: '',
        component: home_page_component_1.HomePageComponent
    },
    {
        path: 'messages',
        component: message_component_1.MessageComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map