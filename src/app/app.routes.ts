import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: 'breakfast', component: BreakfastComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);