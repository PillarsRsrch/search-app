import { ICookie } from './ICookie';
import { IPath } from './IPath';
import { IRequest } from './IRequest';
import { IResponse } from './IResponse';
import { ISelector } from './ISelector';
import { IWebDriver } from './IWebDriver';

export class WebDriver implements IWebDriver {
    constructor(private readonly host: string) {}

    expectPageChangeTo(path: IPath): Promise<void> {
        return new Promise((resolve, reject) => {
            cy.on('url:changed', (url) => {
                if (url !== path.value) {
                    return reject();
                }
                return resolve();
            });
        });
    }

    findCookie(cookie: ICookie): void {
        cy.getCookie(cookie.key).should('exist');
    }

    findElement(selector: ISelector): void {
        cy.get(selector.toString()).should('exist');
    }

    isViewingPage(path: IPath): void {
        cy.url().should('include', path.value);
    }

    async makeRequest<T>(request: IRequest): Promise<IResponse<T>> {
        return new Promise<IResponse<T>>((resolve) => {
            cy.request(request).then((response) => {
                resolve({
                    status: response.status,
                    data: response.body,
                });
            });
        });
    }

    navigateToPage(path: IPath): void {
        cy.visit(`${this.host}/${path.value}`);
    }
}
