"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var message_component_1 = require("./components/message/message.component");
var conversation_component_1 = require("./components/conversation/conversation.component");
var appRoutes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'home' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'messages', component: message_component_1.MessageComponent },
    { path: 'conversation', component: conversation_component_1.ConversationComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map