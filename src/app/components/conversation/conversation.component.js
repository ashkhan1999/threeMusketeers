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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var message_service_1 = require("../../services/message/message.service");
var ConversationComponent = (function () {
    function ConversationComponent(messageService, activatedRoute) {
        var _this = this;
        this.messageService = messageService;
        this.activatedRoute = activatedRoute;
        this.messageService.getMessages().subscribe(function (messages) {
            _this.messages = messages;
        });
        this.sendBtnClicked = false;
        this.messageJSON = JSON.stringify('{"msg":' + this.usrMessage + '}');
        this.User = JSON.parse(this.messageJSON);
        this.JSON = JSON;
    }
    ConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (params) {
            var Id = params['id'];
            _this.queryId = Id;
        });
    };
    ConversationComponent.prototype.sendMessage = function () {
        return this.sendBtnClicked = true;
    };
    ConversationComponent.prototype.changeBtnStatus = function () {
        if (this.sendBtnClicked === true) {
            return this.sendBtnClicked = false;
        }
    };
    return ConversationComponent;
}());
ConversationComponent = __decorate([
    core_1.Component({
        selector: 'conversation',
        templateUrl: './conversation.component.html',
        providers: [message_service_1.MessageServices],
    }),
    __metadata("design:paramtypes", [message_service_1.MessageServices, router_1.ActivatedRoute])
], ConversationComponent);
exports.ConversationComponent = ConversationComponent;
//# sourceMappingURL=conversation.component.js.map