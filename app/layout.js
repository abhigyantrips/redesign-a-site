import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import { ThemeProvider } from '@/components/theme-provider';

import '@/styles/globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransisionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
