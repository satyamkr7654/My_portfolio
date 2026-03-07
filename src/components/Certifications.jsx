import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiChevronLeft, FiChevronRight, FiAward, FiExternalLink } from 'react-icons/fi'
import './Certifications.css'

const certs = [
    {
        id: 1,
        title: 'Object Oriented Programming',
        issuer: 'IamNeo & LPU',
        date: 'Dec 2024',
        duration: '72 Hours',
        image: '/certificates/cert-oop-iamneo.jpg',
        filename: 'OOP-Certificate-IamNeo.jpg',
        tag: 'Programming',
        color: '#e85d75',
    },
    {
        id: 2,
        title: 'The Bits and Bytes of Computer Networking',
        issuer: 'Google / Coursera',
        date: 'Sep 2024',
        duration: 'Online Course',
        image: '/certificates/cert-networking-google.jpg',
        filename: 'Networking-Certificate-Google.jpg',
        tag: 'Networking',
        color: '#4285F4',
        verifyUrl: 'https://coursera.org/verify/8M4APHB4SFXL',
    },
    {
        id: 3,
        title: 'Java Programming',
        issuer: 'IamNeo & LPU',
        date: 'May 2025',
        duration: '72 Hours',
        image: '/certificates/cert-java-iamneo.jpg',
        filename: 'Java-Certificate-IamNeo.jpg',
        tag: 'Programming',
        color: '#f97316',
    },
    {
        id: 4,
        title: 'Packet Switching Networks and Algorithms',
        issuer: 'University of Colorado / Coursera',
        date: 'Nov 2024',
        duration: 'Online Course',
        image: '/certificates/cert-packet-switching-colorado.jpg',
        filename: 'PacketSwitching-Certificate-Colorado.jpg',
        tag: 'Networking',
        color: '#cfb87c',
        verifyUrl: 'https://coursera.org/verify/A8HMA0VNZMY5',
    },
    {
        id: 5,
        title: 'Introduction to Hardware and Operating Systems',
        issuer: 'IBM / Coursera',
        date: 'Sep 2024',
        duration: 'Online Course',
        image: '/certificates/cert-hardware-os-ibm.jpg',
        filename: 'HardwareOS-Certificate-IBM.jpg',
        tag: 'Systems',
        color: '#1F70C1',
        verifyUrl: 'https://coursera.org/verify/EVQDUM0MH3Z8',
    },
    {
        id: 6,
        title: 'Fundamentals of Network Communication',
        issuer: 'University of Colorado / Coursera',
        date: 'Oct 2024',
        duration: 'Online Course',
        image: '/certificates/cert-network-comm-colorado.jpg',
        filename: 'NetworkComm-Certificate-Colorado.jpg',
        tag: 'Networking',
        color: '#cfb87c',
        verifyUrl: 'https://coursera.org/verify/R080HGK1LLWW',
    },
    {
        id: 7,
        title: 'Introduction to Data Science',
        issuer: 'Infosys Springboard',
        date: 'Dec 2025',
        duration: 'Online Course',
        image: '/certificates/cert-data-science-infosys.jpg',
        filename: 'DataScience-Certificate-Infosys.jpg',
        tag: 'Data Science',
        color: '#007CC3',
    },
    {
        id: 8,
        title: 'Introduction to Artificial Intelligence',
        issuer: 'Infosys Springboard',
        date: 'Dec 2025',
        duration: 'Online Course',
        image: '/certificates/cert-ai-infosys.jpg',
        filename: 'AI-Certificate-Infosys.jpg',
        tag: 'AI/ML',
        color: '#00A86B',
    },
    {
        id: 9,
        title: 'Data Structures and Algorithm',
        issuer: 'IamNeo & LPU',
        date: 'Dec 2024',
        duration: '72 Hours',
        image: '/certificates/cert-dsa-iamneo.jpg',
        filename: 'DSA-Certificate-IamNeo.jpg',
        tag: 'Programming',
        color: '#e85d75',
    },
    {
        id: 10,
        title: 'Computer Communications',
        issuer: 'University of Colorado / Coursera',
        date: 'Nov 2024',
        duration: 'Specialization (4 Courses)',
        image: '/certificates/cert-computer-comm-colorado.jpg',
        filename: 'ComputerComm-Specialization-Colorado.jpg',
        tag: 'Networking',
        color: '#cfb87c',
        verifyUrl: 'https://coursera.org/verify/specialization/TZV1SER2OXMA',
    },
    {
        id: 11,
        title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
        issuer: 'Infosys Springboard',
        date: 'Jul 2025',
        duration: 'Online Course',
        image: '/certificates/cert-chatgpt-prompt-infosys.jpg',
        filename: 'ChatGPT-PromptEng-Certificate-Infosys.jpg',
        tag: 'AI/ML',
        color: '#00A86B',
    },
    {
        id: 12,
        title: 'Build Generative AI Apps and Solutions with No-Code Tools',
        issuer: 'Infosys Springboard',
        date: 'Aug 2025',
        duration: 'Online Course',
        image: '/certificates/cert-genai-nocode-infosys.jpg',
        filename: 'GenAI-NoCode-Certificate-Infosys.jpg',
        tag: 'AI/ML',
        color: '#9C27B0',
    },
    {
        id: 13,
        title: 'Data Structures and Algorithms using Java',
        issuer: 'Infosys Springboard',
        date: 'Dec 2025',
        duration: 'Online Course',
        image: '/certificates/cert-dsa-java-infosys.jpg',
        filename: 'DSA-Java-Certificate-Infosys.jpg',
        tag: 'Programming',
        color: '#007CC3',
    },
    {
        id: 14,
        title: 'Learn JAVA Programming - Beginner to Master',
        issuer: 'Udemy',
        date: 'Aug 2025',
        duration: '61.5 Hours',
        image: '/certificates/cert-java-udemy.jpg',
        filename: 'Java-Beginner-to-Master-Udemy.jpg',
        tag: 'Programming',
        color: '#EC5252',
    },
    {
        id: 15,
        title: 'TCP/IP and Advanced Topics',
        issuer: 'University of Colorado / Coursera',
        date: 'Nov 2024',
        duration: 'Online Course',
        image: '/certificates/cert-tcpip-colorado.jpg',
        filename: 'TCPIP-Certificate-Colorado.jpg',
        tag: 'Networking',
        color: '#cfb87c',
        verifyUrl: 'https://coursera.org/verify/Z85AXAJQQYD7',
    },
    {
        id: 16,
        title: 'Programming using Java',
        issuer: 'Infosys Springboard',
        date: 'Dec 2025',
        duration: 'Online Course',
        image: '/certificates/cert-prog-java-infosys.jpg',
        filename: 'ProgrammingJava-Certificate-Infosys.jpg',
        tag: 'Programming',
        color: '#007CC3',
    },
    {
        id: 17,
        title: 'PHP with Laravel for Beginners - Become a Master in Laravel',
        issuer: 'Udemy',
        date: 'Jan 2026',
        duration: '43 Hours',
        image: '/certificates/cert-laravel-udemy.jpg',
        filename: 'Laravel-Certificate-Udemy.jpg',
        tag: 'Web Dev',
        color: '#FF2D20',
    },
    {
        id: 18,
        title: 'Advanced Computer Networks',
        issuer: 'NPTEL / IIT (Elite)',
        date: 'Jan–Apr 2025',
        duration: '12 Week Course',
        image: '/certificates/cert-adv-networks-nptel.jpg',
        filename: 'AdvNetworks-NPTEL-Elite.jpg',
        tag: 'Networking',
        color: '#B71C1C',
    },
    {
        id: 19,
        title: 'Database Management System Part - 1',
        issuer: 'Infosys Springboard',
        date: 'Dec 2025',
        duration: 'Online Course',
        image: '/certificates/cert-dbms-part1-infosys.jpg',
        filename: 'DBMS-Part1-Certificate-Infosys.jpg',
        tag: 'Databases',
        color: '#FF6B35',
    },
    {
        id: 20,
        title: 'Database Management System Part - 2',
        issuer: 'Infosys Springboard',
        date: 'Dec 2025',
        duration: 'Online Course',
        image: '/certificates/cert-dbms-part2-infosys.jpg',
        filename: 'DBMS-Part2-Certificate-Infosys.jpg',
        tag: 'Databases',
        color: '#FF6B35',
    },
    {
        id: 21,
        title: 'Peer-to-Peer Protocols and Local Area Networks',
        issuer: 'University of Colorado / Coursera',
        date: 'Nov 2024',
        duration: 'Online Course',
        image: '/certificates/cert-p2p-lan-colorado.jpg',
        filename: 'P2P-LAN-Certificate-Colorado.jpg',
        tag: 'Networking',
        color: '#cfb87c',
        verifyUrl: 'https://coursera.org/verify/3ABVZ97OYQDR',
    },
    {
        id: 22,
        title: 'GEN AI NASSCOM',
        issuer: 'SFJ / NASSCOM',
        date: 'Feb 2026',
        duration: 'Skill Development Program',
        image: '/certificates/cert-genai-nasscom.png',
        filename: 'GenAI-NASSCOM-Certificate.png',
        tag: 'AI/ML',
        color: '#00A86B',
    },
    {
        id: 23,
        title: 'FLAMES \'25 – Master DSA with Java/C++ (Industrial Practices)',
        issuer: 'W3Grads / The Angaar Batch',
        date: 'Jun–Jul 2025',
        duration: 'Summer Training Program',
        image: '/certificates/cert-dsa-flames-w3grads.png',
        filename: 'FLAMES25-DSA-W3Grads.png',
        tag: 'Programming',
        color: '#FF6D00',
    },
]

export default function Certifications() {
    const { isDark } = useTheme()
    const revealRef = useScrollReveal()
    const [current, setCurrent] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [direction, setDirection] = useState('next')
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [autoPlay, setAutoPlay] = useState(true)

    const goTo = useCallback((index, dir = 'next') => {
        if (isAnimating) return
        setDirection(dir)
        setIsAnimating(true)
        setTimeout(() => {
            setCurrent(index)
            setIsAnimating(false)
        }, 350)
    }, [isAnimating])

    const goNext = useCallback(() => {
        goTo((current + 1) % certs.length, 'next')
    }, [current, goTo])

    const goPrev = useCallback(() => {
        goTo((current - 1 + certs.length) % certs.length, 'prev')
    }, [current, goTo])

    // Auto-play
    useEffect(() => {
        if (!autoPlay || lightboxOpen) return
        const timer = setInterval(goNext, 4000)
        return () => clearInterval(timer)
    }, [autoPlay, lightboxOpen, goNext])


    const cert = certs[current]

    return (
        <section id="certifications" className={`certifications ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// certifications</span>
                    <h2 className="section-title">My Certifications</h2>
                    <p className="section-subtitle">
                        <FiAward style={{ marginRight: 6, verticalAlign: 'middle' }} />
                        {certs.length} certificates earned
                    </p>
                </div>

                <div
                    className="cert-carousel-wrapper"
                    onMouseEnter={() => setAutoPlay(false)}
                    onMouseLeave={() => setAutoPlay(true)}
                >
                    {/* Main Carousel */}
                    <div className="cert-carousel">
                        {/* Nav Buttons */}
                        <button
                            className="cert-nav cert-nav-prev"
                            onClick={goPrev}
                            aria-label="Previous certificate"
                        >
                            <FiChevronLeft />
                        </button>
                        <button
                            className="cert-nav cert-nav-next"
                            onClick={goNext}
                            aria-label="Next certificate"
                        >
                            <FiChevronRight />
                        </button>

                        {/* Certificate Image */}
                        <div
                            className={`cert-image-wrapper ${isAnimating ? `slide-${direction}` : ''}`}
                            onClick={() => setLightboxOpen(true)}
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="cert-image"
                            />
                            <div className="cert-image-overlay">
                                <span className="cert-zoom-hint">Click to view full screen</span>
                            </div>
                        </div>

                        {/* Info Panel */}
                        <div className={`cert-info-panel ${isAnimating ? `slide-${direction}` : ''}`}>
                            <div className="cert-tag" style={{ background: cert.color + '22', color: cert.color, borderColor: cert.color + '44' }}>
                                {cert.tag}
                            </div>
                            <h3 className="cert-slide-title">{cert.title}</h3>
                            <div className="cert-meta">
                                <div className="cert-meta-item">
                                    <span className="cert-meta-label">Issuer</span>
                                    <span className="cert-meta-value">{cert.issuer}</span>
                                </div>
                                <div className="cert-meta-item">
                                    <span className="cert-meta-label">Date</span>
                                    <span className="cert-meta-value">{cert.date}</span>
                                </div>
                                <div className="cert-meta-item">
                                    <span className="cert-meta-label">Duration</span>
                                    <span className="cert-meta-value">{cert.duration}</span>
                                </div>
                            </div>
                            <div className="cert-actions">
                                {cert.verifyUrl && (
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-btn cert-btn-verify"
                                        title="Verify on Coursera"
                                    >
                                        <FiExternalLink /> Verify
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="cert-dots">
                        {certs.map((c, i) => (
                            <button
                                key={c.id}
                                className={`cert-dot ${i === current ? 'active' : ''}`}
                                style={i === current ? { background: cert.color, borderColor: cert.color } : {}}
                                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                                aria-label={`Go to certificate ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="cert-thumbnails">
                        {certs.map((c, i) => (
                            <button
                                key={c.id}
                                className={`cert-thumb ${i === current ? 'active' : ''}`}
                                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                                style={i === current ? { borderColor: cert.color } : {}}
                            >
                                <img src={c.image} alt={c.title} />
                                <span className="cert-thumb-label">{c.issuer.split('/')[0].trim()}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="cert-lightbox"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button className="cert-lightbox-close" onClick={() => setLightboxOpen(false)}>✕</button>
                    <div className="cert-lightbox-inner" onClick={e => e.stopPropagation()}>
                        <img src={cert.image} alt={cert.title} className="cert-lightbox-img" />
                        <div className="cert-lightbox-actions">
                            {cert.verifyUrl && (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-btn cert-btn-verify"
                                >
                                    <FiExternalLink /> Verify Certificate
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
