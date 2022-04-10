import type { NextPage } from 'next';
import Head from 'next/head';
import { GoogleAuthenticatorService } from '../src/services/foundations/authenticators/GoogleAuthenticatorService';
import { GoogleAuthenticationComponent } from '../src/views/components/authentication/authenticators/GoogleAuthenticatorComponent';
import { AuthenticationPage } from '../src/views/pages/authentication/AuthenticationPage';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Pillars</title>
                <meta name="description" content="Pillars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthenticationPage
                service={
                    new GoogleAuthenticatorService(
                        '687779576352-9r79e7127rqfsb6tvf6k9887bbst7g1n.apps.googleusercontent.com',
                        'single_host_origin',
                        GoogleAuthenticationComponent
                    )
                }
            />
        </div>
    );
};

export default Home;
