import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MessageComponent} from './components/message/message.component';

const appRoutes: Routes = [
    {
        path: 'messages',
        component: MessageComponent
    },
    {
        path: '',
        component: AppComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
