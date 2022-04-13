import type { NextPage } from 'next';
import Head from 'next/head';
import { IconRepository } from '../src/repositories/icons/IconRepository';
import { GoogleAuthenticatorService } from '../src/services/foundations/authenticators/GoogleAuthenticatorService';
import { IconService } from '../src/services/foundations/icons/IconService';
import { GoogleAuthenticationComponent } from '../src/views/components/authentication/authenticators/GoogleAuthenticatorComponent';
import { AuthenticationPage } from '../src/views/pages/authentication/AuthenticationPage';
import { InMemoryIconStore } from '../src/store/icons/InMemoryIconStore';
import { NextRouterService } from '../src/services/foundations/router/NextRouterService';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    const authenticatorService = new GoogleAuthenticatorService(
        '687779576352-9r79e7127rqfsb6tvf6k9887bbst7g1n.apps.googleusercontent.com',
        'single_host_origin',
        'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.readonly',
        GoogleAuthenticationComponent
    );
    const iconService = new IconService(new IconRepository(InMemoryIconStore));
    const routerService = new NextRouterService(router);
    return (
        <div>
            <Head>
                <title>Pillars Research Services</title>
                <meta name="description" content="Pillars Research Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthenticationPage
                authenticatorService={authenticatorService}
                iconService={iconService}
                routerService={routerService}
            />
        </div>
    );
};

export default Home;
