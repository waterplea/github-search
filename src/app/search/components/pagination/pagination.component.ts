import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: PaginationComponent,
            multi: true,
        },
    ],
})
export class PaginationComponent implements ControlValueAccessor {
    @Input()
    total = 0;

    page = 0;

    get length(): number {
        return Math.floor(this.total / 10);
    }

    registerOnChange(fn: (value: number) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: Function) {
        this.onTouched = fn;
    }

    writeValue(value: number | null) {
        this.page = value || 1;
    }

    onIndexChange(index: number) {
        this.page = index;
        this.onChange(index);
    }

    private onChange: (value: number) => void = () => {};
    private onTouched: Function = () => {};
}
