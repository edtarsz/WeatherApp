import { Routes } from '@angular/router';
import { LandingPage } from '../main/landing.page/landing.page';
import { Account } from '../account/account';
import { Register } from '../account/register/register';
import { Login } from '../account/login/login';
import { Main } from '../main/main';

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