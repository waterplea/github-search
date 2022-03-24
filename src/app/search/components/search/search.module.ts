import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {
    TuiButtonModule,
    TuiExpandModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiToggleModule,
} from '@taiga-ui/kit';

import {QueryFormModule} from '../../directives/query-form/query-form.module';
import {SearchComponent} from './search.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        QueryFormModule,
        TuiInputModule,
        TuiButtonModule,
        TuiExpandModule,
        TuiInputDateModule,
        TuiInputCountModule,
        TuiToggleModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [SearchComponent],
    exports: [SearchComponent],
})
export class SearchModule {}
