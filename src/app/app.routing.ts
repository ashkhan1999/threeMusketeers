import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MessageComponent} from './components/message/message.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'messages',
        component: MessageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
