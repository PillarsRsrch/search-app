import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../src/views/bases/button/Button';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Pillars</title>
                <meta name="description" content="Pillars" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Button disabled={false} onClick={() => console.log('here')}>
                Authenticate With Google
            </Button>
        </div>
    );
};

export default Home;
