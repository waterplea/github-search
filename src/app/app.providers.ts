import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Provider} from '@angular/core';
import {TUI_DATE_FORMAT, TUI_DATE_SEPARATOR, TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';

import {ErrorInterceptor} from './search/services/error.interceptor';

export const APP_PROVIDERS: Provider[] = [
    {
        provide: TUI_DATE_FORMAT,
        useValue: 'MDY',
    },
    {
        provide: TUI_DATE_SEPARATOR,
        useValue: '/',
    },
    {
        provide: TUI_FIRST_DAY_OF_WEEK,
        useValue: TuiDayOfWeek.Sunday,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true,
    },
];
