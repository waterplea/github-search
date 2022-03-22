import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { UniversalModule } from '@ng-web-apis/universal';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    UniversalModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
