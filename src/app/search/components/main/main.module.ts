import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';

import {QueryFormModule} from '../../directives/query-form/query-form.module';
import {PaginationModule} from '../pagination/pagination.module';
import {SearchModule} from '../search/search.module';
import {UsersModule} from '../users/users.module';
import {MainComponent} from './main.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
    },
];

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        TuiLetModule,
        TuiMapperPipeModule,
        SearchModule,
        UsersModule,
        PaginationModule,
        QueryFormModule,
        RouterModule.forChild(ROUTES),
        FormsModule,
    ],
    declarations: [MainComponent],
    exports: [MainComponent],
})
export class MainModule {}
