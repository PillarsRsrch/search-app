import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../src/views/bases/Button';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
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
