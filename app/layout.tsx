import { Urbanist } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ModalProvider } from '../providers/previewModal';
import { ToastProvider } from '../providers/toastProvider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
