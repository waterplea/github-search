export interface User {
    readonly name: string | null;
    readonly login: string;
    readonly avatar_url: string | null;
    readonly bio: string | null;
    readonly html_url: string;
    readonly followers: number;
}
