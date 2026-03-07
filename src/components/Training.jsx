import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiBook, FiCheckCircle } from 'react-icons/fi'
import './Training.css'

export default function Training() {
    const { isDark } = useTheme()
    const revealRef = useScrollReveal()

    return (
        <section id="training" className={`training ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// training</span>
                    <h2 className="section-title">Training & Experience</h2>
                </div>

                <div className="training-card glass-card">
                    <div className="training-icon-wrap">
                        <FiBook size={28} />
                    </div>
                    <div className="training-content">
                        <div className="training-badge">Summer Training</div>
                        <h3 className="training-title">Data Structures & Algorithms with Java</h3>
                        <div className="training-points">
                            <div className="training-point">
                                <FiCheckCircle size={16} />
                                <span>Developed Railway Management System during training period</span>
                            </div>
                            <div className="training-point">
                                <FiCheckCircle size={16} />
                                <span>Implemented ticket booking and waiting list logic using priority queues and linked lists</span>
                            </div>
                            <div className="training-point">
                                <FiCheckCircle size={16} />
                                <span>Gained hands-on experience with advanced DSA concepts applied to real-world scenarios</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
