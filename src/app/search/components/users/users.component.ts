import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';

import {UsersService} from '../../services/users.service';

@Component({
    selector: 'users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
    @Input()
    users: readonly string[] | null = null;

    readonly query$ = this.activatedRoute.queryParams.pipe(map(({query}) => query));

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly usersService: UsersService,
    ) {}

    readonly getUser = (login: string) => this.usersService.getUser(login);
}
