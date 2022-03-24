import {Routes} from '@angular/router';

import {UsersResolver} from './search/services/users.resolver';

export const ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./search/components/main/main.module').then(m => m.MainModule),
        resolve: {
            users: UsersResolver,
        },
    },
];
