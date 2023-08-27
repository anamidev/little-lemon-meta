import logo from '@/assets/logo.png';
import Image from 'next/image';
import '@/styles/Footer.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-background">
            <div className="footer-container">
                <Image
                    src={logo}
                    alt="Little Lemon logo"
                />
                {/* <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and
                    classic cocktails in a lively but casual environment. The restaurant features a
                    locally sourced menu with daily specials.
                </p> */}
                <div className="footer-content">
                    {/* <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Accra</li>
                            <li>Kumasi</li>
                            <li>Cape Coast</li>
                            <li>Tamale</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 10:30AM - 12:00AM</li>
                            <li>Fri: 12:00PM - 1:00AM</li>
                            <li>Sat - Sun: 10:30AM - 12:00AM</li>
                        </ul>
                    </div> */}
                    <div>
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>96 Abafom Road, North Ridge - Accra</li>
                            <li>Tel: 020 7928 0678</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
                    <div>
                        <h5>SOCIALS</h5>
                        <ul>
                            <li className="flex items-center gap-2">
                                <BsFacebook className="w-7 h-7" />
                                Facebook
                            </li>
                            <li className="flex items-center gap-2">
                                <BsInstagram className="w-7 h-7" />
                                Instagram
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>NAVIGATION</h5>
                        <ul>
                            <li>
                                <Link
                                    href={'/'}
                                    className="text-white hover:underline"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>
                                <Link
                                    href={'/reservations'}
                                    className="text-white hover:underline"
                                >
                                    Resevations
                                </Link>
                            </li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
