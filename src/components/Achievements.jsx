import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiYoutube, FiTrendingUp, FiAward } from 'react-icons/fi'
import './Achievements.css'

export default function Achievements() {
    const { isDark } = useTheme()
    const revealRef = useScrollReveal()

    return (
        <section id="achievements" className={`achievements ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// milestones</span>
                    <h2 className="section-title">Achievements</h2>
                </div>

                <div className="achievement-card glass-card">
                    <div className="achievement-icon">
                        <FiYoutube size={48} color="#FF0000" />
                    </div>
                    <div className="achievement-content">
                        <h3 className="achievement-title">YouTube Content Creator</h3>
                        <div className="achievement-stats">
                            <div className="stat-badge">
                                <FiTrendingUp size={16} />
                                <span>4,500+ Subscribers</span>
                            </div>
                            <div className="stat-badge">
                                <FiAward size={16} />
                                <span>Monetized Channel</span>
                            </div>
                        </div>
                        <p className="achievement-desc">
                            Developed and managed a YouTube channel, growing the audience to over 4,500 subscribers and achieving platform monetization. Generated steady income through strategic content creation, active audience engagement, and continuous performance optimization. This experience strongly demonstrates practical skills in digital marketing, community building, and content growth strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
