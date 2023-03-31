import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';


const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps: { session, ...pageProps } }: { Component: any, pageProps: { session: any } }) {
  return (
    <SessionProvider session={session}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
