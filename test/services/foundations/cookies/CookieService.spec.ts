import { anything, instance, mock, reset, when } from 'ts-mockito';
import { Cookie } from '../../../../src/models/storage/Cookie';
import { ICookieModel } from '../../../../src/repositories/cookies/ICookieModel';
import { IRepository } from '../../../../src/repositories/IRepository';
import { CookieService } from '../../../../src/services/foundations/cookies/CookieService';

describe('Cookie Service Test Suite', () => {
    const mockedCookieRepository = mock<IRepository<ICookieModel>>();
    const service = new CookieService(instance(mockedCookieRepository));

    beforeEach(() => {
        reset(mockedCookieRepository);
    });

    describe('createCookie', () => {
        test('Should create a cookie', () => {
            const inputCookie = new Cookie('id', 'value');
            const expectedCookie = inputCookie;
            when(mockedCookieRepository.create(anything())).thenCall((x) => x);

            const actualCookie = service.createCookie(inputCookie);

            expect(actualCookie).toEqual(expectedCookie);
        });
    });

    describe('getAllCookies', () => {
        test('Should get all cookies', () => {
            const expectedCookies = [new Cookie('id', 'value')];
            when(mockedCookieRepository.getAll()).thenReturn([
                {
                    key: 'id',
                    value: 'value',
                },
            ]);

            const actualCookies = service.getAllCookies();

            expect(actualCookies).toEqual(expectedCookies);
        });
    });

    describe('getCookie', () => {
        test('Should get a cookie by id', () => {
            const expectedCookie = new Cookie('id', 'value');
            when(mockedCookieRepository.getById('id')).thenReturn({
                key: 'id',
                value: 'value',
            });

            const actualCookie = service.getCookie('id');

            expect(actualCookie).toEqual(expectedCookie);
        });
    });
});
