import { Routes } from '@angular/router';
import { LandingPage } from '../landing.page/landing.page';
import { Account } from '../account/account';

export const routes: Routes = [
    {
        path: 'index',
        component: LandingPage
    },
    {
        path: 'account/register',
        component: Account
    },
]

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