import { NextRouter } from 'next/router';
import { IRouterService } from './IRouterService';

export class NextRouterService implements IRouterService {
    constructor(private readonly router: NextRouter) {}

    navigate(path: string): void {
        this.router.push(path);
    }
}
