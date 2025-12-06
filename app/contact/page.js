import Link from 'next/link';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroSubtitle}>
                        We'd love to hear from you. Get in touch with our team.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <h2>Get In Touch</h2>
                            <p className={styles.infoText}>
                                Have questions about our products or services? We're here to help!
                                Reach out to us through any of the channels below.
                            </p>

                            <div className={styles.infoCards}>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>📞</div>
                                    <h3>Phone</h3>
                                    <a href="tel:+917060999077">+91 7060999077</a>
                                    <p>Mon-Sat, 9 AM - 8 PM</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>📧</div>
                                    <h3>Email</h3>
                                    <a href="mailto:contact@zenviacare.com">contact@zenviacare.com</a>
                                    <p>We'll respond within 24 hours</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>💬</div>
                                    <h3>WhatsApp</h3>
                                    <a href="https://wa.me/917060999077">Chat with us</a>
                                    <p>Quick responses</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>📍</div>
                                    <h3>Locations</h3>
                                    <p>15+ parlours across India</p>
                                    <Link href="/services">Find nearest location</Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <div className={styles.formCard}>
                                <h2>Send us a Message</h2>
                                <form className={styles.contactForm}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 XXXXXXXXXX"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject">Subject</label>
                                        <select id="subject" name="subject" required>
                                            <option value="">Select a subject</option>
                                            <option value="product">Product Inquiry</option>
                                            <option value="service">Service Inquiry</option>
                                            <option value="booking">Booking Question</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            placeholder="Tell us how we can help you..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className={styles.companySection}>
                <div className="container">
                    <div className={styles.companyCard}>
                        <h2>Zenvia Care India Pvt Ltd</h2>
                        <p>
                            SoulMend is operated by Zenvia Care India Pvt Ltd, committed to bringing
                            authentic Thai wellness solutions to India.
                        </p>
                        <div className={styles.businessHours}>
                            <h3>Business Hours</h3>
                            <p><strong>Monday - Saturday:</strong> 9:00 AM - 8:00 PM</p>
                            <p><strong>Sunday:</strong> 10:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
