import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from '../shared/shared.module';
import { IntroComponent, DashboardComponent } from '../viewsmodule';

const appRoutes: Routes = [
    {
        path: 'splash',
        component: SplashComponent
    },
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    },
]

export const routing = RouterModule.forRoot(appRoutes, { useHash: true});

