import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiBadgedContentModule, TuiBadgeModule} from '@taiga-ui/kit';

import {StrongPipeModule} from '../../pipes/strong/strong.pipe.module';
import {UserComponent} from './user.component';

@NgModule({
    declarations: [UserComponent],
    exports: [UserComponent],
    imports: [
        CommonModule,
        StrongPipeModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiBadgeModule,
        TuiSvgModule,
        TuiBadgedContentModule,
        TuiMapperPipeModule,
    ],
})
export class UserModule {}
