import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { NextAuthProvider } from '../components/AuthProvider/AuthProvider';
import Toast from '../components/Toast/Toast';
import ThemeProvider from '../components/ThemeProvider/ThemeProvider'
import Headers from '../components/Header/Site-Header';
import Footers from '../components/Footer/Site-Footer';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "urban Deca Tower",
  description: "Discover the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Toast />
          <ThemeProvider>
            <main className="font-normal">
             <Headers />
              {children}
             <Footers/>
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
