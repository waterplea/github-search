import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiNotificationsModule, TuiRootModule} from '@taiga-ui/core';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        BrowserAnimationsModule,
        TuiRootModule,
        TuiNotificationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
