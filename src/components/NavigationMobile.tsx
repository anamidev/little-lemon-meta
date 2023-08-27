'use client';

import '@/styles/NavigationMobile.css';
import { useState } from 'react';
import Navigation_Links from './Navigation_Links';
import { GrClose, GrMenu } from 'react-icons/gr';

export default function NavigationMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="mobile-nav">
            {isOpen ? (
                <GrClose
                    className="hamburger"
                    size="20px"
                    onClick={() => setIsOpen(false)}
                />
            ) : (
                <GrMenu
                    className="hamburger close-menu"
                    size="20px"
                    onClick={() => setIsOpen(true)}
                />
            )}
            {isOpen && <Navigation_Links closeMobileMenu={() => setIsOpen(false)} />}
        </nav>
    );
}
