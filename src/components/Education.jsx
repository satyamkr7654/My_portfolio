import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'
import './Education.css'

const educationData = [
    {
        degree: 'B.Tech – Computer Science and Engineering',
        institution: 'Lovely Professional University',
        location: 'Punjab',
        period: 'Aug 2024 – Present',
        grade: 'CGPA: 7',
        icon: '🎓',
        current: true,
    },
    {
        degree: 'Diploma',
        institution: 'Government Polytechnic College',
        location: 'Barauni',
        period: 'Apr 2020 – Oct 2023',
        grade: 'CGPA: 8.20',
        icon: '📚',
        current: false,
    },
    {
        degree: 'Matriculation – 81.6%',
        institution: "St. Paul's English School",
        location: 'Nalanda',
        period: 'Mar 2019 – Feb 2020',
        grade: '81.6%',
        icon: '🏫',
        current: false,
    },
]

export default function Education() {
    const { isDark } = useTheme()
    const revealRef = useScrollReveal()

    return (
        <section id="education" className={`education ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// education</span>
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">My academic journey and achievements.</p>
                </div>

                <div className="timeline">
                    {educationData.map((edu, i) => (
                        <div key={i} className={`timeline-item ${edu.current ? 'current' : ''}`}>
                            <div className="timeline-dot">
                                <span>{edu.icon}</span>
                            </div>
                            <div className="timeline-line" />
                            <div className="timeline-card glass-card">
                                {edu.current && <div className="current-badge">Current</div>}
                                <h3 className="edu-degree">{edu.degree}</h3>
                                <h4 className="edu-institution">{edu.institution}</h4>
                                <div className="edu-meta">
                                    <span className="edu-meta-item">
                                        <FiMapPin size={13} /> {edu.location}
                                    </span>
                                    <span className="edu-meta-item">
                                        <FiCalendar size={13} /> {edu.period}
                                    </span>
                                    <span className="edu-meta-item grade">
                                        <FiAward size={13} /> {edu.grade}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
