import type { NextPage } from 'next';
import Head from 'next/head';
import { IconRepository } from '../src/repositories/icons/IconRepository';
import { GoogleAuthenticatorService } from '../src/services/foundations/authenticators/GoogleAuthenticatorService';
import { IconService } from '../src/services/foundations/icons/IconService';
import { GoogleAuthenticationComponent } from '../src/views/components/authentication/authenticators/GoogleAuthenticatorComponent';
import { AuthenticationPage } from '../src/views/pages/authentication/AuthenticationPage';
import { InMemoryIconStore } from '../src/store/icons/InMemoryIconStore';

const Home: NextPage = () => {
    const service = new GoogleAuthenticatorService(
        '687779576352-9r79e7127rqfsb6tvf6k9887bbst7g1n.apps.googleusercontent.com',
        'single_host_origin',
        GoogleAuthenticationComponent
    );
    const iconService = new IconService(new IconRepository(InMemoryIconStore));
    return (
        <div>
            <Head>
                <title>Pillars</title>
                <meta name="description" content="Pillars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthenticationPage
                authenticatorService={service}
                iconService={iconService}
            />
        </div>
    );
};

export default Home;
