import { Routes } from '@angular/router';
import { LandingPage } from '../main/landing.page/landing.page';
import { Main } from '../main/main';
import { Settings } from '../main/settings/settings';
import { Account } from '../main/account/account';
import { Login } from '../main/account/login/login';
import { Register } from '../main/account/register/register';

export const routes: Routes = [
    {
        path: 'index',
        component: LandingPage
    },
    {
        path: 'account',
        component: Account,
        children: [
            {
                path: 'register',
                component: Register
            },
            {
                path: 'login',
                component: Login
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'main',
        component: Main
    },
    {
        path: 'settings',
        component: Settings
    },
    {
        path: '**',
        redirectTo: '/index',
    }
];

// {
//     path: 'campgrounds/:id',
//     component: Campground
// },
// {
//     path: 'campgrounds/:id/edit',
//     component: EditCampground
// },
// {
//     path: '404',
//     component: NotFound
// },
// {
//     path: '**',
//     redirectTo: '/404',
// }