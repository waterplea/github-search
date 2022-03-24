import {Params} from '@angular/router';

export function parseQuery(query: string): Params {
    return Object.fromEntries(query.split(' ').map(parseModifier));
}

function parseModifier(modifier: string): [string, unknown] {
    if (modifier.startsWith('followers:>')) {
        return ['followers', Number(modifier.replace('followers:>', ''))];
    }

    if (modifier.startsWith('created:<')) {
        return ['date', modifier.replace('created:<', '')];
    }

    if (modifier === 'is:sponsorable') {
        return ['sponsorable', true];
    }

    return [modifier, modifier];
}
