import type { NextPage } from 'next';
import Head from 'next/head';
import { AuthenticatorService } from '../src/services/foundations/authenticators/AuthenticationService';
import { IAuthenticatorService } from '../src/services/foundations/authenticators/IAuthenticatorService';
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
            <AuthenticationPage>
                <GoogleAuthenticationComponent
                    service={new AuthenticatorService()}
                    clientId="687779576352-9r79e7127rqfsb6tvf6k9887bbst7g1n.apps.googleusercontent.com"
                    cookiePolicy="single_host_origin"
                >
                    Login With Google
                </GoogleAuthenticationComponent>
            </AuthenticationPage>
        </div>
    );
};

export default Home;
