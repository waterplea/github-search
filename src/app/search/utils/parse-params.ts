import {Params} from '@angular/router';

export function parseParams(params: Params): string {
    let query = String(params['query']);

    if (params['sponsorable']) {
        query += ' is:sponsorable';
    }

    if (params['date']) {
        query += ` created:<${params['date']}`;
    }

    if (params['followers']) {
        query += ` followers:>${params['followers']}`;
    }

    return query;
}
