import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiCode, FiCpu, FiUsers, FiLayers } from 'react-icons/fi'
import './About.css'

const highlights = [
    { icon: <FiCpu size={22} />, title: 'Strong OOP', desc: 'Deep expertise in Object-Oriented Programming principles and design patterns.' },
    { icon: <FiCode size={22} />, title: 'Problem Solver', desc: 'Passionate about solving complex algorithmic problems using DSA.' },
    { icon: <FiUsers size={22} />, title: 'Leadership', desc: 'Proven adaptability and leadership in team environments.' },
    { icon: <FiLayers size={22} />, title: 'Full Stack', desc: 'Building end-to-end applications from backend APIs to polished UIs.' },
]

export default function About() {
    const { isDark } = useTheme()
    const revealRef = useScrollReveal()

    return (
        <section id="about" className={`about ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// about me</span>
                    <h2 className="section-title">Who I Am</h2>
                </div>

                <div className="about-grid">
                    <div className="about-text">
                        <p className="about-intro">
                            I am a <span className="highlight-word">Computer Science student</span> passionate about backend systems, full-stack development, and problem-solving using Data Structures and Algorithms.
                        </p>
                        <p className="about-desc">
                            I focus on building scalable applications using <span className="highlight-word">Java, Node.js</span>, and modern web technologies. Every project I build reflects my commitment to clean architecture, efficiency, and real-world impact.
                        </p>
                        <p className="about-desc">
                            I thrive in collaborative environments and am always seeking new challenges that push my technical boundaries and allow me to grow as an engineer.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-num">3+</span>
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat">
                                <span className="stat-num">1K+</span>
                                <span className="stat-label">DSA Problems</span>
                            </div>
                            <div className="stat">
                                <span className="stat-num">8.20</span>
                                <span className="stat-label">Diploma CGPA</span>
                            </div>
                        </div>
                    </div>

                    <div className="highlights-grid">
                        {highlights.map((h, i) => (
                            <div key={i} className="highlight-card glass-card">
                                <div className="highlight-icon">{h.icon}</div>
                                <h4 className="highlight-title">{h.title}</h4>
                                <p className="highlight-desc">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
