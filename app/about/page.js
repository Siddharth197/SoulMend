import Link from 'next/link';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>About SoulMend</h1>
                    <p className={styles.heroSubtitle}>
                        Bringing authentic Thai healing to India since our inception
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className={styles.storySection}>
                        <div className={styles.storyContent}>
                            <h2 className="section-title">Our Story</h2>
                            <p className={styles.storyText}>
                                SoulMend was born from a passion for authentic Thai healing traditions and a vision to make these ancient remedies accessible to everyone in India. We recognized the growing need for natural, effective solutions to modern-day stress and pain.
                            </p>
                            <p className={styles.storyText}>
                                What started as a small venture has grown into a trusted brand with 15+ locations across India, serving thousands of satisfied customers who have experienced the transformative power of Thai natural healing.
                            </p>
                            <p className={styles.storyText}>
                                Operated by <strong>Zenvia Care India Pvt Ltd</strong>, we are committed to maintaining the highest standards of quality and authenticity in every product and service we offer.
                            </p>
                        </div>
                        <div className={styles.storyImage}>
                            <div className={styles.imageCard}>
                                <img src="/images/spa-1.png" alt="SoulMend Spa" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.missionSection}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>🎯</div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide authentic Thai healing products and services that promote natural wellness,
                                relieve pain, and enhance the quality of life for our customers across India.
                            </p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>👁️</div>
                            <h3>Our Vision</h3>
                            <p>
                                To become India's most trusted brand for Thai natural healing, making traditional
                                wellness accessible to every household and establishing a network of premium spa centers nationwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>✨</div>
                            <h3>Authenticity</h3>
                            <p>We source only genuine Thai products and maintain traditional massage techniques</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🌿</div>
                            <h3>Natural Healing</h3>
                            <p>100% natural ingredients with no harmful chemicals or artificial additives</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>💎</div>
                            <h3>Premium Quality</h3>
                            <p>Uncompromising standards in product quality and service excellence</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🤝</div>
                            <h3>Customer Trust</h3>
                            <p>Building lasting relationships through transparency and reliability</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🔬</div>
                            <h3>Innovation</h3>
                            <p>Combining ancient wisdom with modern wellness practices</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🌍</div>
                            <h3>Sustainability</h3>
                            <p>Eco-friendly practices and responsible sourcing for a better tomorrow</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Happy Customers</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>15+</div>
                            <div className={styles.statLabel}>Spa Locations</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>Natural Products</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>4.9★</div>
                            <div className={styles.statLabel}>Customer Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Why Choose SoulMend?</h2>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyCard}>
                            <div className={styles.whyNumber}>01</div>
                            <h3>Direct from Thailand</h3>
                            <p>All our products are imported directly from Thailand, ensuring authenticity and quality</p>
                        </div>
                        <div className={styles.whyCard}>
                            <div className={styles.whyNumber}>02</div>
                            <h3>Expert Therapists</h3>
                            <p>Our massage therapists are trained in traditional Thai techniques and certified professionals</p>
                        </div>
                        <div className={styles.whyCard}>
                            <div className={styles.whyNumber}>03</div>
                            <h3>Proven Results</h3>
                            <p>Thousands of satisfied customers have experienced relief from pain and stress</p>
                        </div>
                        <div className={styles.whyCard}>
                            <div className={styles.whyNumber}>04</div>
                            <h3>Hygiene Standards</h3>
                            <p>Strict hygiene protocols and sanitized equipment at all our spa locations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className={styles.companySection}>
                <div className="container">
                    <div className={styles.companyCard}>
                        <h2>Zenvia Care India Pvt Ltd</h2>
                        <p className={styles.companyText}>
                            SoulMend is a proud brand of Zenvia Care India Pvt Ltd, a company dedicated to
                            bringing premium wellness solutions to the Indian market. We operate with the
                            highest standards of business ethics and customer service.
                        </p>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📧</span>
                                <span>contact@zenviacare.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📞</span>
                                <span>+91 7060999077</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Experience Natural Healing Today</h2>
                    <p>Join thousands of satisfied customers who trust SoulMend for their wellness needs</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/shop" className="btn btn-accent">
                            Shop Products
                        </Link>
                        <Link href="/booking" className="btn btn-primary">
                            Book Massage
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
