import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {User} from '../../types/user';

@Component({
    selector: 'user',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
    @Input()
    user: User | null = null;

    readonly query = this.activatedRoute.snapshot.queryParams['query'];

    constructor(private readonly activatedRoute: ActivatedRoute) {}
}
