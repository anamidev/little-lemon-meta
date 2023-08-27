import Image from 'next/image';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import logo from '@/assets/logo.jpg';
import '@/styles/Header.css';

export default function Header() {
    return (
        <header className="header">
            <section className="header-wrapper">
                <div className="image-wrapper">
                    <Image
                        src={logo}
                        alt="Little Lemon logo"
                        priority
                    />
                </div>
                <Navigation />
                <NavigationMobile />
            </section>
        </header>
    );
}
