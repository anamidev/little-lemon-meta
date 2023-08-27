'use client';

import Link from 'next/link';

interface Props {
    closeMobileMenu: Function | null;
}

export default function Navigation_Links({ closeMobileMenu }: Props) {
    return (
        <ul className="menu-items">
            <li onClick={() => closeMobileMenu && closeMobileMenu()}>
                <Link
                    href={'/'}
                    className="active-links"
                >
                    Home
                </Link>
            </li>
            <li onClick={() => closeMobileMenu && closeMobileMenu()}>
                <Link href={'#'}>About</Link>
            </li>
            <li onClick={() => closeMobileMenu && closeMobileMenu()}>
                <Link href={'#'}>Menu</Link>
            </li>
            <li onClick={() => closeMobileMenu && closeMobileMenu()}>
                <Link
                    href={'/reservations'}
                    className="active-links"
                >
                    Revervations
                </Link>
            </li>
            <li onClick={() => closeMobileMenu && closeMobileMenu()}>
                <Link href={'#'}>Order Online</Link>
            </li>
            <li onClick={() => closeMobileMenu && closeMobileMenu()}>
                <Link href={'#'}>Login</Link>
            </li>
        </ul>
    );
}
