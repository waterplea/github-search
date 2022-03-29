import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {startWith, switchMap} from 'rxjs';

import {UsersService} from '../../services/users.service';
import {Users} from '../../types/users';

@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    query = '';

    readonly form = new FormGroup({
        query: new FormControl(),
        page: new FormControl(
            Number(this.activatedRoute.snapshot.queryParams['page'] || 1),
        ),
    });

    readonly users$ = this.form.valueChanges.pipe(
        switchMap(({query, page}) =>
            this.usersService.getUsers(query, page).pipe(startWith(null)),
        ),
        startWith(this.activatedRoute.snapshot.data['users']),
    );

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly usersService: UsersService,
    ) {}

    get first(): number {
        return 1 + (this.form.get('page')?.value - 1) * 10;
    }

    onModelChange(query: string) {
        this.query = query;
        this.form.patchValue({query, page: 1});
    }

    readonly login = (users: Users | null) =>
        users?.items.map(({login}) => login) || null;
}
