import { ICookie } from './ICookie';
import { IPath } from './IPath';
import { ISelector } from './ISelector';

export interface IWebDriver {
    navigateToPage(path: IPath): void;
    findCookie(cookie: ICookie): void;
    findElement(element: ISelector): void;
    isViewingPage(path: IPath): void;
    makeRequest(request: unknown): Promise<unknown>;
}
