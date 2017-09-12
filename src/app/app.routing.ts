import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {MessageComponent} from './components/message/message.component';
import {ConversationComponent} from './components/conversation/conversation.component';

const appRoutes: Routes = [
    {path:'', pathMatch: 'prefix', redirectTo: 'home'},
    {path:'home', component: HomeComponent},
    {path:'messages', component: MessageComponent},
    {path:'conversation', component: ConversationComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
