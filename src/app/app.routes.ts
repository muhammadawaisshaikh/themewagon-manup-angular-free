import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/pages/homepage/homepage.component').then(p => p.HomepageComponent)
    },
    {
        path: 'homepage',
        loadComponent: () => import('../app/pages/homepage/homepage.component').then(p => p.HomepageComponent)
    },
    {
        path: 'schedule',
        loadComponent: () => import('../app/pages/schedule-form/schedule-form.component').then(p => p.ScheduleFormComponent)
    }
];
