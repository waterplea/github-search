import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {TuiLoaderModule, TuiNotificationsModule, TuiRootModule} from '@taiga-ui/core';

import {AppComponent} from './app.component';
import {APP_PROVIDERS} from './app.providers';
import {ROUTES} from './app.routes';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        BrowserAnimationsModule,
        BrowserTransferStateModule,
        HttpClientModule,
        TuiRootModule,
        TuiNotificationsModule,
        TuiLoaderModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: APP_PROVIDERS,
    bootstrap: [AppComponent],
})
export class AppModule {}
