import { Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { homeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: NavBarComponent,
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.homeComponent)
            }
        ]
    }
];
