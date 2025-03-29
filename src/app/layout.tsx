import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import '@/app/globals.css';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'NextJS 15 + Shadcn UI + TailwindCss 4 + Typescript',
  description: 'This is source base for NextJS',
};

export const manrope = Manrope({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={`${manrope.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
