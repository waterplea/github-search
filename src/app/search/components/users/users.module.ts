import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiForModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiLoaderModule} from '@taiga-ui/core';

import {UserModule} from '../user/user.module';
import {UsersComponent} from './users.component';

@NgModule({
    imports: [
        CommonModule,
        UserModule,
        TuiForModule,
        TuiLoaderModule,
        TuiMapperPipeModule,
    ],
    declarations: [UsersComponent],
    exports: [UsersComponent],
})
export class UsersModule {}
