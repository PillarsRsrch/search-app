import type { NextPage } from 'next';
import { InMemoryIconRepository } from '../src/repositories/icons/InMemoryIconRepository';
import { GoogleAuthenticatorService } from '../src/services/foundations/authenticators/GoogleAuthenticatorService';
import { IconService } from '../src/services/foundations/icons/IconService';
import { GoogleAuthenticationComponent } from '../src/views/components/authentications/authenticators/GoogleAuthenticatorComponent';
import { AuthenticationPage } from '../src/views/pages/authentication/AuthenticationPage';
import { InMemoryIconStore } from '../src/store/icons/InMemoryIconStore';
import { NextRouterService } from '../src/services/foundations/router/NextRouterService';
import { useRouter } from 'next/router';
import { CookieService } from '../src/services/foundations/cookies/CookieService';
import { CookieRepository } from '../src/repositories/cookies/CookieRepository';
import { Head } from '../src/views/bases/head/Head';
import { Scripts } from '../src/views/bases/scripts/Scripts';

const Home: NextPage = () => {
    const router = useRouter();
    const authenticatorService = new GoogleAuthenticatorService(
        '687779576352-9r79e7127rqfsb6tvf6k9887bbst7g1n.apps.googleusercontent.com',
        'single_host_origin',
        'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.readonly',
        GoogleAuthenticationComponent
    );
    const cookieService = new CookieService(new CookieRepository());
    const iconService = new IconService(
        new InMemoryIconRepository(InMemoryIconStore)
    );
    const routerService = new NextRouterService(router);

    return (
        <>
            <Head title="Pillars Research Service" />
            <AuthenticationPage
                authenticatorService={authenticatorService}
                cookieService={cookieService}
                iconService={iconService}
                routerService={routerService}
            />
            <Scripts />
        </>
    );
};

export default Home;
