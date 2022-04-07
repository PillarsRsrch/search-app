import { ICookie } from './ICookie';
import { IPath } from './IPath';
import { IRequest } from './IRequest';
import { IResponse } from './IResponse';
import { ISelector } from './ISelector';

export interface IWebDriver {
    expectPageChangeTo(path: IPath): Promise<void>;
    findCookie(cookie: ICookie): void;
    findElement(selector: ISelector): void;
    isViewingPage(path: IPath): void;
    makeRequest<T = {}>(request: IRequest): Promise<IResponse<T>>;
    navigateToPage(path: IPath): void;
}
