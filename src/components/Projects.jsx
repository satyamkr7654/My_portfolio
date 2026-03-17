import React, { useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const projects = [
    {
        number: '01',
        title: 'Disaster Management System',
        description: 'Full-stack emergency response platform providing real-time alerts to 100+ simulated users. Features live location tracking, centralized helpline coordination, and secure data storage with 100% integrity during stress testing.',
        highlights: [
            'Real-time alerts delivered to 100+ simulated users',
            'Live location tracking & centralized helpline',
            '100% data integrity maintained during testing',
        ],
        tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
        github: 'https://github.com/satyamkr7654/disastermanagement',
        live: null,
        color: '#00f5ff',
    },
    {
        number: '02',
        title: 'Railway Management System',
        description: 'Scalable train booking engine built with Java OOP principles and advanced DSA. Leverages Linked Lists and Priority Queues to manage 1,000+ simulated passengers with 30% faster seat allocation vs. array-based baselines.',
        highlights: [
            '1,000+ simulated passengers managed efficiently',
            'Priority Queues for optimal seat allocation',
            '30% faster than array-based baseline implementation',
        ],
        tech: ['Java', 'DSA', 'OOP', 'Linked Lists', 'Priority Queues'],
        github: 'https://github.com/satyamkr7654/railway-management-system',
        live: null,
        color: '#8b5cf6',
    },
    {
        number: '03',
        title: 'Virtual Study Room Platform',
        description: 'Real-time collaborative study platform built with MERN stack and WebRTC. Supports 100+ concurrent users across 10+ study rooms with real-time chat, file sharing, collaborative notes, and video conferencing.',
        highlights: [
            '100+ concurrent users, 10+ study rooms',
            'Real-time chat, file sharing & WebRTC video',
            'Secure JWT auth & RESTful APIs',
        ],
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'WebRTC'],
        github: 'https://github.com/satyamkr7654/virtual-study-room',
        live: 'https://satyamkr7654.github.io/virtual-study-room',
        color: '#f59e0b',
    },
]

export default function Projects() {
    const { isDark } = useTheme()
    const revealRef = useScrollReveal()

    return (
        <section id="projects" className={`projects ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// projects</span>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">Real-world applications built with modern technologies and measurable impact.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((proj, i) => (
                        <article key={i} className="project-card glass-card" style={{ '--accent': proj.color }} aria-label={`Project: ${proj.title}`}>
                            <div className="project-number" aria-hidden="true">{proj.number}</div>
                            <div className="project-body">
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-desc">{proj.description}</p>
                                <ul className="project-highlights" aria-label="Project highlights">
                                    {proj.highlights.map((h, j) => (
                                        <li key={j}><span className="bullet" aria-hidden="true">▶</span> {h}</li>
                                    ))}
                                </ul>
                                <div className="project-tech" aria-label="Technologies used">
                                    {proj.tech.map((t, j) => (
                                        <span key={j} className="tech-chip">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-links">
                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    aria-label={`View ${proj.title} on GitHub`}
                                >
                                    <FiGithub size={18} /> GitHub
                                </a>
                                {proj.live && (
                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link project-link-live"
                                        aria-label={`View live demo of ${proj.title}`}
                                    >
                                        <FiExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                            </div>
                            <div className="project-glow" aria-hidden="true" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
