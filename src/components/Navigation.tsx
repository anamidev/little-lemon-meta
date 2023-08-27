import '@/styles/Navigation.css';
import Navigation_Links from './Navigation_Links';

export default function Navigation() {
    return (
        <nav className="navigation">
            <Navigation_Links closeMobileMenu={null} />
        </nav>
    );
}
