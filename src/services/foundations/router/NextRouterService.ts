import { NextRouter } from 'next/router';
import { PageTransition } from '../../../models/routers/PageTransition';
import { IRouterService } from './IRouterService';

export class NextRouterService implements IRouterService {
    constructor(private readonly router: NextRouter) {}

    async navigate(transition: PageTransition): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.router.push(transition.path);
                resolve();
            }, transition.delay);
        });
    }
}
