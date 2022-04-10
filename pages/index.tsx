import type { NextPage } from 'next';
import Head from 'next/head';
import { GoogleAuthenticatorService } from '../src/services/foundations/authenticators/GoogleAuthenticatorService';
import { AuthenticationPage } from '../src/views/pages/authentication/AuthenticationPage';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Pillars</title>
                <meta name="description" content="Pillars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthenticationPage service={new GoogleAuthenticatorService()} />
        </div>
    );
};

export default Home;
