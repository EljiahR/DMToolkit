export type Token = {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
}

export type RegisterErrors = {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    errors: {
        additionalProp1: [
        string
        ],
        additionalProp2: [
        string
        ],
        additionalProp3: [
        string
        ]
    };
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}