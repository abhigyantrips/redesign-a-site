import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import BackgroundMorph from '@/components/background-morph';
import Footer from '@/components/footer';
import NavBar from '@/components/nav-bar';
import { ThemeProvider } from '@/components/theme-provider';

import '@/styles/globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'HDFC Bank',
  description: 'That one bank that does it all.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'relative min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransisionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
