import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'strong',
})
export class StrongPipe implements PipeTransform {
    transform(value: string | null, query: string): string {
        return value?.replace(new RegExp(query, 'gim'), '<strong>$&</strong>') || '';
    }
}
