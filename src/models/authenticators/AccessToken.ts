export class AccessToken {
    constructor(
        public readonly value: string,
        public readonly expiresAt: number
    ) {}
}
