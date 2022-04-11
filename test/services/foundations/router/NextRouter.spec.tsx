import { NextRouter } from 'next/router';
import { instance, mock, verify, when } from 'ts-mockito';
import { NextRouterService } from '../../../../src/services/foundations/router/NextRouterService';

describe('Next Router Test Suite', () => {
    const mockedRouter = mock<NextRouter>();
    const service = new NextRouterService(instance(mockedRouter));

    test('Should route to another page', () => {
        when(mockedRouter.push('/projects')).thenReturn();

        service.navigate('/projects');

        verify(mockedRouter.push('/projects')).once();
    });
});
