import { IRepository } from '../IRepository';
import { ICookieModel } from './ICookieModel';

export class CookieRepository implements IRepository<ICookieModel> {
    getById(id: string): ICookieModel {
        const cookieKey = `${id}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieParts = decodedCookie.split(';');
        const cookie = cookieParts
            .map((part) => part.trimStart())
            .find((part) => part.startsWith(cookieKey));
        if (!cookie) {
            throw new Error();
        }
        return {
            key: cookie.substring(0, cookieKey.length - 1),
            value: cookie.substring(cookieKey.length),
        };
    }

    getAll(): ICookieModel[] {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieParts = decodedCookie.split(';');
        const cookieModels = cookieParts
            .map((part) => part.trimStart().split('='))
            .map((cookie) => {
                return { key: cookie[0], value: cookie[1] };
            });
        return cookieModels;
    }

    create(model: ICookieModel): ICookieModel {
        const cookie = `${model.key}=${model.value};path=/`;
        document.cookie = cookie;
        return this.getById(model.key);
    }
}
