import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Training', href: '#training' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = navLinks.map(l => l.href.slice(1))

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Active section tracking via IntersectionObserver
    useEffect(() => {
        const observers = []
        SECTION_IDS.forEach(id => {
            const el = document.getElementById(id)
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
                { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
            )
            observer.observe(el)
            observers.push(observer)
        })
        return () => observers.forEach(o => o.disconnect())
    }, [])

    const handleNav = (href) => {
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''} ${isDark ? 'dark' : 'light'}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="nav-container">
                <a href="#hero" className="nav-logo" onClick={() => handleNav('#hero')} aria-label="Satyam Kumar - Home">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">SK</span>
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`} role="list">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                onClick={() => handleNav(link.href)}
                                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            className="btn-hire"
                            href="https://mail.google.com/mail/?view=cm&to=satyamkumartech18@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Hire Satyam Kumar - Send email"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>

                <div className="nav-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="nav-links"
                    >
                        {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
