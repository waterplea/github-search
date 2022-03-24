import {coerceValue} from '@taiga-ui/addon-doc';

export function coerceParams(
    data: Record<string, string>,
): Record<string, number | string | boolean | null> {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, coerceValue(value)]),
    );
}
