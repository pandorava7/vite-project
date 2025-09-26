import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [active, setactive] = useState("Portfolio");

    const links = [
        { label: "Portfolio", href: "#portfolio" },
        { label: "About me", href: "#about" },
        { label: "Resume", href: "#resume" },
        { label: "Other", href: "#other" },
    ];

    return (
        <div className='navbar'>
            <div className="nav-links">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={active === link.label ? 'active' : ''}
                        onClick={() => setactive(link.label)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navbar
