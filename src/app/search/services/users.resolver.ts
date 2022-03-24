import {Injectable} from '@angular/core';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of, tap} from 'rxjs';

import {Users} from '../types/users';
import {BLANK_USERS} from '../utils/blank-users';
import {parseParams} from '../utils/parse-params';
import {UsersService} from './users.service';

const USERS = makeStateKey<Users>('users');

@Injectable({providedIn: 'root'})
export class UsersResolver implements Resolve<Users> {
    constructor(
        private readonly usersService: UsersService,
        private readonly transferState: TransferState,
    ) {}

    resolve({queryParams}: ActivatedRouteSnapshot): Observable<Users> {
        return this.transferState.hasKey(USERS) || !queryParams['query']
            ? of(this.transferState.get(USERS, BLANK_USERS))
            : this.usersService
                  .getUsers(parseParams(queryParams), queryParams['page'])
                  .pipe(tap(result => this.transferState.set(USERS, result)));
    }
}
