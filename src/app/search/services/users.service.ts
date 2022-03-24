import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser';
import {defaultIfEmpty, Observable, of, tap} from 'rxjs';

import {ENDPOINT} from '../tokens/endpoint';
import {User} from '../types/user';
import {Users} from '../types/users';
import {BLANK_USERS} from '../utils/blank-users';

const USERS = new Map<string, StateKey<User>>();

@Injectable({providedIn: 'root'})
export class UsersService {
    constructor(
        @Inject(ENDPOINT) private readonly endpoint: string,
        private readonly http: HttpClient,
        private readonly transferState: TransferState,
    ) {}

    getUsers(q: string, page: number = 1): Observable<Users> {
        return this.http
            .get<Users>(`${this.endpoint}search/users`, {
                params: {per_page: 10, q, page},
            })
            .pipe(defaultIfEmpty(BLANK_USERS));
    }

    getUser(username: string): Observable<User | null> {
        const stateKey = USERS.get(username) || makeStateKey<User>(username);

        USERS.set(username, stateKey);

        return this.transferState.hasKey(stateKey)
            ? of(this.transferState.get(stateKey, null))
            : this.http.get<User>(`${this.endpoint}users/${username}`).pipe(
                  tap(result => this.transferState.set(stateKey, result)),
                  defaultIfEmpty(null),
              );
    }
}
