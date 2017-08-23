import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {MessageComponent} from './components/message/message.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'messages',
        component: MessageComponent
    },
    {
    	path: 'appointments',
    	component: AppointmentsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
