import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
    const { isDark } = useTheme()

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <span className="footer-logo">
                            <span className="bracket">&lt;</span>SK<span className="bracket">/&gt;</span>
                        </span>
                        <p className="footer-tagline">
                            Building scalable systems with clean architecture and real-world impact.
                        </p>
                    </div>

                    <div className="footer-links">
                        {[
                            ['About', '#about'],
                            ['Skills', '#skills'],
                            ['Projects', '#projects'],
                            ['Education', '#education'],
                            ['Contact', '#contact'],
                        ].map(([label, href]) => (
                            <a key={label} href={href} className="footer-link" onClick={e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}>
                                {label}
                            </a>
                        ))}
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/satyamkr7654" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/satyamkr7654/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
                            <FiLinkedin size={20} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&to=satyamkumartech18@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Email">
                            <FiMail size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Satyam Kumar. Made with <FiHeart size={14} className="heart" /> in India.
                    </p>
                    <p className="footer-stack">Built with React + Vite</p>
                </div>
            </div>

            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                <FiArrowUp size={20} />
            </button>
        </footer>
    )
}
