import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiSend, FiUser, FiMessageSquare, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import './Contact.css'

function validate(form) {
    const errors = {}
    if (!form.name.trim() || form.name.trim().length < 2)
        errors.name = 'Name must be at least 2 characters.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        errors.email = 'Please enter a valid email address.'
    if (!form.message.trim() || form.message.trim().length < 10)
        errors.message = 'Message must be at least 10 characters.'
    return errors
}

export default function Contact() {
    const { isDark } = useTheme()
    const revealRef = useScrollReveal()
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

    const handleChange = e => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        // Clear error on typing
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const validationErrors = validate(form)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setStatus('sending')
        try {
            const response = await fetch('https://formspree.io/f/maqpnqyo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
            })

            if (response.ok) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
                setTimeout(() => setStatus(null), 5000)
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className={`contact ${isDark ? 'dark' : 'light'}`}>
            <div className="container reveal" ref={revealRef}>
                <div className="section-header">
                    <span className="section-tag">// contact</span>
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="section-subtitle">Open to opportunities, collaborations, and conversations.</p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="info-title">Get In Touch</h3>
                        <p className="info-text">
                            I'm currently open to new opportunities and would love to hear from you. Whether you have a project, job offer, or just want to say hi—my inbox is always open!
                        </p>
                        <div className="contact-links">
                            <a href="https://mail.google.com/mail/?view=cm&to=satyamkumartech18@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link-item" aria-label="Send email to Satyam Kumar">
                                <div className="link-icon"><FiMail size={20} /></div>
                                <div>
                                    <p className="link-label">Email</p>
                                    <p className="link-value">satyamkumartech18@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/satyamkr7654/" target="_blank" rel="noopener noreferrer" className="contact-link-item" aria-label="LinkedIn profile">
                                <div className="link-icon"><FiLinkedin size={20} /></div>
                                <div>
                                    <p className="link-label">LinkedIn</p>
                                    <p className="link-value">linkedin.com/in/satyamkr7654</p>
                                </div>
                            </a>
                            <a href="https://github.com/satyamkr7654" target="_blank" rel="noopener noreferrer" className="contact-link-item" aria-label="GitHub profile">
                                <div className="link-icon"><FiGithub size={20} /></div>
                                <div>
                                    <p className="link-label">GitHub</p>
                                    <p className="link-value">github.com/satyamkr7654</p>
                                </div>
                            </a>
                            <a href="tel:+917654392485" className="contact-link-item" aria-label="Call Satyam Kumar">
                                <div className="link-icon"><FiPhone size={20} /></div>
                                <div>
                                    <p className="link-label">Phone</p>
                                    <p className="link-value">+91-7654392485</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrap glass-card">
                        <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <FiUser size={15} /> Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    aria-required="true"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    className={errors.name ? 'input-error' : ''}
                                />
                                {errors.name && (
                                    <span className="field-error" id="name-error" role="alert">
                                        <FiAlertCircle size={13} /> {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <FiMail size={15} /> Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    aria-required="true"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    className={errors.email ? 'input-error' : ''}
                                />
                                {errors.email && (
                                    <span className="field-error" id="email-error" role="alert">
                                        <FiAlertCircle size={13} /> {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">
                                    <FiMessageSquare size={15} /> Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or opportunity..."
                                    rows={5}
                                    aria-required="true"
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    className={errors.message ? 'input-error' : ''}
                                />
                                {errors.message && (
                                    <span className="field-error" id="message-error" role="alert">
                                        <FiAlertCircle size={13} /> {errors.message}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={status === 'sending'}
                                aria-busy={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <><span className="spinner" aria-hidden="true" /> Sending...</>
                                ) : (
                                    <><FiSend size={16} /> Send Message</>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="success-msg" role="alert">
                                    <FiCheckCircle size={18} />
                                    Message sent! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="error-msg" role="alert">
                                    <FiAlertCircle size={18} />
                                    Failed to send. Please try emailing me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
