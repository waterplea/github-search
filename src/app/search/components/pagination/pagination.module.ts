import {NgModule} from '@angular/core';
import {TuiPaginationModule} from '@taiga-ui/kit';

import {PaginationComponent} from './pagination.component';

@NgModule({
    imports: [TuiPaginationModule],
    declarations: [PaginationComponent],
    exports: [PaginationComponent],
})
export class PaginationModule {}
