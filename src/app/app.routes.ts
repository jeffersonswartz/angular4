import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
    {
        path: 'dashboard',
        component: HeaderComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRouterModule =  RouterModule.forRoot(routes);