import Script from 'next/script';

export const Scripts = () => {
    return (
        <>
            <Script async defer src="https://apis.google.com/js/api.js" />
            <Script async defer src="https://accounts.google.com/gsi/client" />
        </>
    );
};
