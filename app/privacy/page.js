import styles from './privacy.module.css';

export default function PrivacyPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: December 5, 2024</p>

                <section className={styles.section}>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to SoulMend, operated by Zenvia Care India Pvt Ltd. We respect your privacy and are committed
                        to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Information We Collect</h2>
                    <h3>Personal Information:</h3>
                    <ul>
                        <li>Name, email address, and phone number</li>
                        <li>Shipping and billing addresses</li>
                        <li>Payment information (processed securely through our payment gateway)</li>
                        <li>Order history and preferences</li>
                    </ul>
                    <h3>Automatically Collected Information:</h3>
                    <ul>
                        <li>IP address and browser type</li>
                        <li>Device information</li>
                        <li>Cookies and usage data</li>
                        <li>Pages visited and time spent on our website</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>3. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Process and fulfill your orders</li>
                        <li>Communicate about your orders and bookings</li>
                        <li>Provide customer support</li>
                        <li>Send promotional emails (with your consent)</li>
                        <li>Improve our website and services</li>
                        <li>Prevent fraud and enhance security</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>4. Data Sharing and Disclosure</h2>
                    <p>We do not sell your personal information. We may share your data with:</p>
                    <ul>
                        <li><strong>Service Providers:</strong> Payment processors, shipping companies, email services</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                        <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>5. Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect your data, including:
                    </p>
                    <ul>
                        <li>SSL encryption for data transmission</li>
                        <li>Secure payment gateways</li>
                        <li>Regular security audits</li>
                        <li>Access controls and authentication</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>6. Cookies</h2>
                    <p>
                        We use cookies to enhance your experience. You can control cookies through your browser settings.
                        Types of cookies we use:
                    </p>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                        <li><strong>Marketing Cookies:</strong> Used for personalized advertising</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Export your data</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>8. Data Retention</h2>
                    <p>
                        We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy,
                        comply with legal obligations, and resolve disputes. Order data is typically retained for 7 years for
                        accounting and legal purposes.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>9. Children's Privacy</h2>
                    <p>
                        Our services are not intended for children under 18. We do not knowingly collect personal information
                        from children. If you believe we have collected data from a child, please contact us immediately.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>10. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                        Please review their privacy policies before providing any information.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>11. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We will notify you of significant changes via email
                        or website notice. Continued use of our services after changes constitutes acceptance.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>12. Contact Us</h2>
                    <p>For privacy-related questions or concerns, contact us at:</p>
                    <div className={styles.contactBox}>
                        <p><strong>Zenvia Care India Pvt Ltd</strong></p>
                        <p>Email: contact@zenviacare.com</p>
                        <p>Phone: +91 7060999077</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
