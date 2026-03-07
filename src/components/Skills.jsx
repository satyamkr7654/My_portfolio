import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const skillCategories = [
    {
        title: 'Programming Languages',
        emoji: '💻',
        skills: ['C', 'C++', 'Java', 'JavaScript', 'PHP', 'HTML5', 'CSS3'],
    },
    {
        title: 'Frameworks & Libraries',
        emoji: '⚛️',
        skills: ['React', 'Node.js', 'Express'],
    },
    {
        title: 'Databases',
        emoji: '🗄️',
        skills: ['MySQL', 'MongoDB'],
    },
    {
        title: 'Core Concepts',
        emoji: '🧠',
        skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'REST API Development'],
    },
    {
        title: 'Developer Tools',
        emoji: '🛠️',
        skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
    },
    {
        title: 'Soft Skills',
        emoji: '🤝',
        skills: ['Problem Solving', 'Leadership', 'Adaptability'],
    },
]

const skillLevels = {
    'Java': 85, 'JavaScript': 80, 'C++': 75, 'C': 70, 'PHP': 65, 'HTML5': 90, 'CSS3': 85,
    'React': 78, 'Node.js': 75, 'Express': 72,
    'MySQL': 80, 'MongoDB': 70,
    'Data Structures & Algorithms': 82, 'Object-Oriented Programming': 85, 'REST API Development': 78,
    'Git': 85, 'GitHub': 85, 'VS Code': 90, 'IntelliJ IDEA': 80,
    'Problem Solving': 88, 'Leadership': 80, 'Adaptability': 85,
}

function SkillBar({ skill, isDark }) {
    const level = skillLevels[skill] || 70
    return (
        <div className="skill-bar-item">
            <div className="skill-bar-header">
                <span className="skill-bar-name">{skill}</span>
                <span className="skill-bar-percent">{level}%</span>
            </div>
            <div className="skill-bar-bg">
                <div
                    className="skill-bar-fill"
                    style={{ '--target-width': `${level}%` }}
                />
            </div>
        </div>
    )
}

export default function Skills() {
    const { isDark } = useTheme()
    const [activeTab, setActiveTab] = useState(0)
    const revealRef = useScrollReveal()

    return (
        <section id="skills" className={`skills ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// skills</span>
                    <h2 className="section-title">Technical Arsenal</h2>
                    <p className="section-subtitle">Technologies and tools I use to bring ideas to life.</p>
                </div>

                <div className="skills-tabs">
                    {skillCategories.map((cat, i) => (
                        <button
                            key={i}
                            className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                            onClick={() => setActiveTab(i)}
                        >
                            <span>{cat.emoji}</span>
                            <span>{cat.title}</span>
                        </button>
                    ))}
                </div>

                <div className="skills-content glass-card">
                    <div className="skills-category-header">
                        <span className="cat-emoji">{skillCategories[activeTab].emoji}</span>
                        <h3 className="cat-title">{skillCategories[activeTab].title}</h3>
                    </div>
                    <div className="skills-bars">
                        {skillCategories[activeTab].skills.map((skill, i) => (
                            <SkillBar key={i} skill={skill} isDark={isDark} />
                        ))}
                    </div>
                </div>

                <div className="skills-all-tags">
                    {skillCategories.map((cat) =>
                        cat.skills.map((skill, i) => (
                            <span key={`${cat.title}-${i}`} className="skill-tag badge">
                                {skill}
                            </span>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
