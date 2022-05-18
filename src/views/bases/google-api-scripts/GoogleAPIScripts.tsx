import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { IGoogleAPIScriptsProps } from './IGoogleAPIScriptsProps';

export const GoogleAPIScripts = ({
    apiKey,
    discoveryDocs,
}: IGoogleAPIScriptsProps) => {
    useEffect(() => {
        async function initializeGoogleApi() {
            await gapi.client.init({
                apiKey,
                discoveryDocs,
            });
        }

        document.getElementById('googleApi')?.addEventListener('load', () => {
            gapi.load('client:auth2', initializeGoogleApi);
        });
    });

    return (
        <>
            <Script
                id="googleApi"
                async
                defer
                src="https://apis.google.com/js/api.js"
            />
            <Script
                id="googleIdentityService"
                async
                defer
                src="https://accounts.google.com/gsi/client"
            />
        </>
    );
};
