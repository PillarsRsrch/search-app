import { ICookie } from './ICookie';
import { IPath } from './IPath';
import { ISelector } from './ISelector';
import { IWebDriver } from './IWebDriver';

export class CypressDriver implements IWebDriver {
    constructor(private readonly origin: string) {}

    navigateToPage(path: IPath): void {
        throw new Error('Method not implemented.');
    }

    findCookie(cookie: ICookie): void {
        throw new Error('Method not implemented.');
    }

    findElement(element: ISelector): void {
        throw new Error('Method not implemented.');
    }

    isViewingPage(path: IPath): void {
        throw new Error('Method not implemented.');
    }

    makeRequest(request: unknown): Promise<unknown> {
        throw new Error('Method not implemented.');
    }
}
