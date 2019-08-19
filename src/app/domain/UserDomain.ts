export class LoginDomain {
    username: string;
    password: string;
}

export class LoginResponInfoDomain {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
}