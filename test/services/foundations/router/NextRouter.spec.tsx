import { NextRouter } from 'next/router';
import { instance, mock, verify, when } from 'ts-mockito';
import { PageTransition } from '../../../../src/models/routers/PageTransition';
import { NextRouterService } from '../../../../src/services/foundations/router/NextRouterService';

describe('Next Router Test Suite', () => {
    const mockedRouter = mock<NextRouter>();
    const service = new NextRouterService(instance(mockedRouter));

    test('Should route to another page', async () => {
        when(mockedRouter.push('/projects')).thenReturn();

        await service.navigate(new PageTransition('/projects', 100));

        verify(mockedRouter.push('/projects')).once();
    });
});
