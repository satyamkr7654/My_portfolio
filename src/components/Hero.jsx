import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload, FiArrowRight, FiCode } from 'react-icons/fi'
import './Hero.css'

const Particle = ({ style }) => <div className="particle" style={style} />

function useTypewriter(words, speed = 80, pause = 2000) {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const word = words[wordIndex]
        if (!deleting && charIndex < word.length) {
            const t = setTimeout(() => {
                setText(word.slice(0, charIndex + 1))
                setCharIndex(c => c + 1)
            }, speed)
            return () => clearTimeout(t)
        } else if (!deleting && charIndex === word.length) {
            const t = setTimeout(() => setDeleting(true), pause)
            return () => clearTimeout(t)
        } else if (deleting && charIndex > 0) {
            const t = setTimeout(() => {
                setText(word.slice(0, charIndex - 1))
                setCharIndex(c => c - 1)
            }, speed / 2)
            return () => clearTimeout(t)
        } else if (deleting && charIndex === 0) {
            setDeleting(false)
            setWordIndex(i => (i + 1) % words.length)
        }
    }, [charIndex, deleting, wordIndex, words, speed, pause])

    return text
}

export default function Hero() {
    const { isDark } = useTheme()
    const typedText = useTypewriter([
        'Full Stack Developer',
        'Java & DSA Enthusiast',
        'Problem Solver',
        'Backend Engineer',
        'React Developer',
    ])

    const particles = useMemo(() => Array.from({ length: 60 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        opacity: Math.random() * 0.6 + 0.1,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${Math.random() * 10 + 8}s`,
    })), [])

    return (
        <section id="hero" className={`hero ${isDark ? 'dark' : 'light'}`}>
            {isDark && (
                <div className="particles-container">
                    {particles.map((p, i) => <Particle key={i} style={p} />)}
                </div>
            )}

            <div className="hero-glow-1" />
            <div className="hero-glow-2" />

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <FiCode size={14} />
                        <span>Available for opportunities</span>
                        <span className="badge-dot" />
                    </div>

                    <h1 className="hero-name">
                        Hi, I'm <span className="name-highlight">Satyam Kumar</span>
                    </h1>

                    <h2 className="hero-title">
                        <span className="typed-text">{typedText}</span>
                        <span className="cursor">|</span>
                    </h2>

                    <p className="hero-tagline">
                        Building scalable systems with clean architecture and real-world impact.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                            <FiCode size={18} /> View Projects
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline" download>
                            <FiDownload size={18} /> Download Resume
                        </a>
                        <a href="#contact" className="btn btn-ghost" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                            Contact Me <FiArrowRight size={18} />
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://www.linkedin.com/in/satyamkr7654/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FiLinkedin size={20} />
                        </a>
                        <a href="https://github.com/satyamkr7654" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&to=satyamkumartech18@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Email">
                            <FiMail size={20} />
                        </a>
                        <a href="tel:+917654392485" className="social-icon" aria-label="Phone">
                            <FiPhone size={20} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="code-window">
                        <div className="window-controls">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                            <span className="window-title">satyam.js</span>
                        </div>
                        <div className="code-content">
                            <p><span className="kw">const</span> <span className="var">satyam</span> = {'{'}</p>
                            <p>&nbsp;&nbsp;<span className="prop">name</span>: <span className="str">"Satyam Kumar"</span>,</p>
                            <p>&nbsp;&nbsp;<span className="prop">role</span>: <span className="str">"Full Stack Dev"</span>,</p>
                            <p>&nbsp;&nbsp;<span className="prop">skills</span>: [</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Java"</span>, <span className="str">"React"</span>,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Node.js"</span>, <span className="str">"DSA"</span></p>
                            <p>&nbsp;&nbsp;],</p>
                            <p>&nbsp;&nbsp;<span className="prop">passion</span>: <span className="str">"Building"</span>,</p>
                            <p>&nbsp;&nbsp;<span className="prop">available</span>: <span className="bool">true</span></p>
                            <p>{'}'}</p>
                            <p className="code-blink"><span className="kw">export</span> <span className="kw">default</span> satyam<span className="terminal-cursor">▊</span></p>
                        </div>
                    </div>

                    <div className="floating-badges">
                        <div className="fl-badge fl-1">⚡ Java</div>
                        <div className="fl-badge fl-2">🚀 React</div>
                        <div className="fl-badge fl-3">🔗 Node.js</div>
                        <div className="fl-badge fl-4">📊 DSA</div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}
