import styles from './terms.module.css';

export default function TermsPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Terms & Conditions</h1>
                <p className={styles.lastUpdated}>Last Updated: December 5, 2024</p>

                <section className={styles.section}>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using SoulMend's website and services, you accept and agree to be bound by these
                        Terms and Conditions. If you do not agree, please do not use our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. About Us</h2>
                    <p>
                        SoulMend is operated by <strong>Zenvia Care India Pvt Ltd</strong>, a company registered in India.
                        We provide authentic Thai wellness products and massage services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. Use of Website</h2>
                    <h3>You agree to:</h3>
                    <ul>
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account</li>
                        <li>Not use the website for illegal purposes</li>
                        <li>Not interfere with website functionality</li>
                        <li>Not attempt unauthorized access to our systems</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>4. Account Registration</h2>
                    <p>
                        To purchase products or book services, you must create an account. You are responsible for:
                    </p>
                    <ul>
                        <li>Maintaining confidentiality of your password</li>
                        <li>All activities under your account</li>
                        <li>Notifying us of unauthorized use</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>5. Products and Services</h2>
                    <h3>Products:</h3>
                    <ul>
                        <li>All products are authentic Thai wellness products</li>
                        <li>Product images are for illustration; actual products may vary slightly</li>
                        <li>We reserve the right to limit quantities</li>
                        <li>Prices are subject to change without notice</li>
                    </ul>
                    <h3>Massage Services:</h3>
                    <ul>
                        <li>Services are provided at our physical locations</li>
                        <li>Appointments must be booked in advance</li>
                        <li>Cancellations must be made 24 hours prior</li>
                        <li>We reserve the right to refuse service</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>6. Pricing and Payment</h2>
                    <ul>
                        <li>All prices are in Indian Rupees (₹)</li>
                        <li>Prices include applicable taxes unless stated otherwise</li>
                        <li>Payment must be made in full before order processing</li>
                        <li>We accept major credit/debit cards, UPI, and net banking</li>
                        <li>Payment processing is handled by secure third-party gateways</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>7. Shipping and Delivery</h2>
                    <ul>
                        <li>Delivery timelines are estimates, not guarantees</li>
                        <li>We are not responsible for delays by shipping carriers</li>
                        <li>Risk of loss passes to you upon delivery</li>
                        <li>You must inspect packages upon delivery</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>8. Returns and Refunds</h2>
                    <ul>
                        <li>Unopened products can be returned within 7 days</li>
                        <li>Products must be in original packaging</li>
                        <li>Refunds processed within 5-7 business days</li>
                        <li>Shipping costs are non-refundable</li>
                        <li>See our Shipping & Returns page for full policy</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>9. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, images, and software, is the property
                        of Zenvia Care India Pvt Ltd and protected by copyright laws. You may not:
                    </p>
                    <ul>
                        <li>Reproduce or distribute our content</li>
                        <li>Use our trademarks without permission</li>
                        <li>Create derivative works</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>10. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Zenvia Care India Pvt Ltd shall not be liable for:
                    </p>
                    <ul>
                        <li>Indirect, incidental, or consequential damages</li>
                        <li>Loss of profits or revenue</li>
                        <li>Data loss or corruption</li>
                        <li>Service interruptions</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>11. Disclaimer of Warranties</h2>
                    <p>
                        Our website and services are provided "as is" without warranties of any kind. We do not guarantee:
                    </p>
                    <ul>
                        <li>Uninterrupted or error-free service</li>
                        <li>Accuracy of information</li>
                        <li>Specific results from product use</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>12. Health and Safety</h2>
                    <ul>
                        <li>Consult a healthcare professional before using our products if you have medical conditions</li>
                        <li>Perform a patch test before using topical products</li>
                        <li>Inform massage therapists of any health conditions</li>
                        <li>We are not responsible for allergic reactions or adverse effects</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>13. Governing Law</h2>
                    <p>
                        These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
                        jurisdiction of courts in [Your City], India.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>14. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                        posting. Continued use of our services constitutes acceptance of modified terms.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>15. Contact Information</h2>
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
