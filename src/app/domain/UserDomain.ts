export class LoginDomain {
    username: string;
    password: string;
    grant_type: string;
    client_id: string;
    client_secret: string;
    scope: string;
}

export class UserInfoDomain {
    user_id: string;
    user_name: string;
}