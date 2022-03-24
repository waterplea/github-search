import {InjectionToken} from '@angular/core';

export const ENDPOINT = new InjectionToken<string>('Url of search endpoint', {
    factory: () => 'https://api.github.com/',
});
