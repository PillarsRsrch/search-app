import { Cookie } from '../../../models/storage/Cookie';
import { ICookieModel } from '../../../repositories/cookies/ICookieModel';
import { IRepository } from '../../../repositories/IRepository';
import { ICookieService } from './ICookieService';

export class CookieService implements ICookieService {
    constructor(private readonly repository: IRepository<ICookieModel>) {}

    createCookie(cookie: Cookie): Cookie {
        const modelToPersist: ICookieModel = {
            key: cookie.key,
            value: cookie.value,
        };
        const persistedModel = this.repository.create(modelToPersist);
        return new Cookie(persistedModel.key, persistedModel.value);
    }

    getAllCookies(): Cookie[] {
        throw new Error('Not implemented yet');
    }

    getCookie(key: string): Cookie {
        const model = this.repository.getById(key);
        return new Cookie(model.key, model.value);
    }
}
