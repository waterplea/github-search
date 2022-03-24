import {Directive, OnInit} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {takeUntil} from 'rxjs';

import {clearParams} from '../../utils/clear-params';
import {coerceParams} from '../../utils/coerce-params';

@Directive({
    selector: '[formGroup][queryForm]',
    providers: [TuiDestroyService],
})
export class QueryFormDirective implements OnInit {
    constructor(
        private readonly form: FormGroupDirective,
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly destroy$: TuiDestroyService,
    ) {}

    ngOnInit() {
        this.form.control.patchValue(
            coerceParams(this.activatedRoute.snapshot.queryParams),
            {emitEvent: false},
        );
        this.form.valueChanges?.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                replaceUrl: true,
                queryParams: clearParams(value),
                queryParamsHandling: 'merge',
            });
        });
    }
}
