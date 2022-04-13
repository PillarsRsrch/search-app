import { Cookie } from '../../../models/storage/Cookie';

export interface ICookieService {
    createCookie(cookie: Cookie): Cookie;
    getCookie(key: string): Cookie;
}
