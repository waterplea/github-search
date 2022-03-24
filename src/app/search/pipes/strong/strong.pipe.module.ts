import {NgModule} from '@angular/core';

import {StrongPipe} from './strong.pipe';

@NgModule({
    declarations: [StrongPipe],
    exports: [StrongPipe],
})
export class StrongPipeModule {}
