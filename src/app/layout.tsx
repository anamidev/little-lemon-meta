import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Little Lemon',
    description:
        'Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
