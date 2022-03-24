import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR,
    Validators,
} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit';

import {JsonDateParser} from '../../utils/json-date-parser';
import {parseParams} from '../../utils/parse-params';
import {parseQuery} from '../../utils/parse-query';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useClass: JsonDateParser,
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SearchComponent,
            multi: true,
        },
    ],
})
export class SearchComponent implements ControlValueAccessor {
    readonly form = new FormGroup(
        {
            query: new FormControl('', Validators.required),
            date: new FormControl(),
            followers: new FormControl(),
            sponsorable: new FormControl(),
        },
        {updateOn: 'submit'},
    );

    readonly today = TuiDay.currentLocal();

    expanded = false;

    registerOnChange(fn: (value: string) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: Function) {
        this.onTouched = fn;
    }

    writeValue(value: string | null) {
        this.form.patchValue(parseQuery(value || ''));
    }

    toggle() {
        this.expanded = !this.expanded;
    }

    onSubmit() {
        if (this.form.valid) {
            this.onChange(parseParams(this.form.value));
        }
    }

    private onChange: (value: string) => void = () => {};
    private onTouched: Function = () => {};
}
