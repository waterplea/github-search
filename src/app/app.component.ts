import {isPlatformBrowser} from '@angular/common';
import {Component, Inject, PLATFORM_ID} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

    get text(): string {
        return isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
    }
}
