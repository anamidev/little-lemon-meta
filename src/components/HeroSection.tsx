import '@/styles/HeroSection.css';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/assets/gourmet.jpg';

export default function HeroSection() {
    return (
        <section className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist.
                    </p>
                    <Link href={'/reservations'}>
                        <button className="btn">Reserve a table</button>
                    </Link>
                </div>
                <div className="section-right">
                    <div className="image-box">
                        <Image
                            src={HeroImage}
                            alt="Gourmet dish"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
