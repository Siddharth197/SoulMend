import Link from 'next/link';
import styles from './services.module.css';

const SERVICES = [
    {
        id: 1,
        name: 'Thai Foot Massage',
        duration: '60 minutes',
        price: 999,
        description: 'Experience the ancient art of Thai foot massage. Our skilled therapists use traditional techniques combined with aromatic oils to relieve tension, improve circulation, and promote deep relaxation.',
        benefits: ['Relieves foot pain', 'Improves circulation', 'Reduces stress', 'Better sleep'],
        image: '/images/service-foot.png',
        popular: true
    },
    {
        id: 2,
        name: 'Full Body Therapy',
        duration: '90 minutes',
        price: 1499,
        description: 'Indulge in our signature full body Thai massage therapy. Using premium oils and traditional stretching techniques, this treatment provides complete relief from muscle tension and stress.',
        benefits: ['Full body relaxation', 'Muscle tension relief', 'Stress reduction', 'Energy boost'],
        image: '/images/service-body.png',
        bestValue: true
    },
    {
        id: 3,
        name: 'Head & Shoulder Massage',
        duration: '45 minutes',
        price: 799,
        description: 'Targeted relief for neck, shoulder, and head tension. Perfect for those who spend long hours at a desk. Uses aromatic Thai herbal oils for maximum relaxation.',
        benefits: ['Headache relief', 'Neck tension release', 'Improved focus', 'Quick relaxation'],
        image: '/images/spa-1.png',
        new: true
    },
    {
        id: 4,
        name: 'Aromatherapy Session',
        duration: '75 minutes',
        price: 1299,
        description: 'Combine the healing power of touch with aromatic essential oils. This therapeutic massage calms the mind, soothes the body, and uplifts the spirit.',
        benefits: ['Mood enhancement', 'Deep relaxation', 'Aromatherapy benefits', 'Holistic healing'],
        image: '/images/spa-2.png',
        new: false
    },
    {
        id: 5,
        name: 'Deep Tissue Massage',
        duration: '60 minutes',
        price: 1199,
        description: 'Intensive massage targeting deep muscle layers. Ideal for chronic pain, sports injuries, or severe muscle tension. Our expert therapists apply firm pressure for lasting relief.',
        benefits: ['Chronic pain relief', 'Sports recovery', 'Injury healing', 'Muscle repair'],
        image: '/images/spa-3.png',
        new: false
    },
    {
        id: 6,
        name: 'Couples Massage',
        duration: '90 minutes',
        price: 2799,
        description: 'Share the experience of relaxation with your loved one. Two therapists provide simultaneous massages in a private, serene setting designed for couples.',
        benefits: ['Shared experience', 'Romantic setting', 'Quality time', 'Double relaxation'],
        image: '/images/spa-1.png',
        new: false
    }
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Our Massage Services</h1>
                    <p className={styles.heroSubtitle}>
                        Experience authentic Thai massage therapy at our premium parlours across India
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.servicesGrid}>
                        {SERVICES.map((service) => (
                            <div key={service.id} className={styles.serviceCard}>
                                {/* Badge */}
                                {service.popular && <span className={`${styles.badge} ${styles.popular}`}>Popular</span>}
                                {service.bestValue && <span className={`${styles.badge} ${styles.bestValue}`}>Best Value</span>}
                                {service.new && <span className={`${styles.badge} ${styles.new}`}>New</span>}

                                {/* Image */}
                                <div className={styles.imageWrapper}>
                                    <div
                                        className={styles.serviceImage}
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />
                                </div>

                                {/* Content */}
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.serviceName}>{service.name}</h3>
                                        <div className={styles.duration}>⏱️ {service.duration}</div>
                                    </div>

                                    <p className={styles.description}>{service.description}</p>

                                    {/* Benefits */}
                                    <div className={styles.benefits}>
                                        <h4>Benefits:</h4>
                                        <ul>
                                            {service.benefits.map((benefit, index) => (
                                                <li key={index}>✓ {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div className={styles.cardFooter}>
                                        <div className={styles.priceSection}>
                                            <span className={styles.price}>₹{service.price}</span>
                                            <span className={styles.priceLabel}>per session</span>
                                        </div>
                                        <Link href="/booking" className="btn btn-primary">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whySection}>
                <div className="container">
                    <h2 className="section-title">Why Choose Our Services?</h2>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>👨‍⚕️</div>
                            <h3>Expert Therapists</h3>
                            <p>All our therapists are certified and trained in traditional Thai massage techniques</p>
                        </div>
                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>🌿</div>
                            <h3>Premium Products</h3>
                            <p>We use only authentic Thai oils and herbs imported directly from Thailand</p>
                        </div>
                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>🏢</div>
                            <h3>Multiple Locations</h3>
                            <p>15+ parlours across major cities in India for your convenience</p>
                        </div>
                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>🎯</div>
                            <h3>Hygiene First</h3>
                            <p>Strict hygiene protocols and sanitized equipment for your safety</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Ready to Experience True Relaxation?</h2>
                    <p>Book your massage session today and feel the difference</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/booking" className="btn btn-accent">
                            Book Appointment
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
