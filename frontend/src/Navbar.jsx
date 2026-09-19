import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();
    const active = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

    return <nav className="navbar">
        <Link to="/" className="brand" aria-label="BidHub home"><span className="brand-mark"><span>B</span></span><span>BidHub<span className="brand-dot">.</span></span></Link>
        <div className="nav-links"><Link to="/" className={active('/')}>Home</Link><Link to="/auctions" className={active('/auctions')}>Auctions</Link><Link to="/categories" className={active('/categories')}>Categories</Link><Link to="/about" className={active('/about')}>How it works</Link></div>
        <div className="nav-actions"><Link to="/login" className="nav-login">Log in</Link><Link to="/signup" className="nav-signup">Create account</Link></div>
    </nav>;
}