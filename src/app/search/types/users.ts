export interface Users {
    readonly incomplete_results: boolean;
    readonly items: readonly {login: string}[];
    readonly total_count: number;
}
