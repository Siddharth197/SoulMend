import Link from 'next/link';
import styles from './faq.module.css';

const FAQS = [
    {
        category: "Orders & Shipping",
        questions: [
            {
                q: "How long does shipping take?",
                a: "We deliver within 3-7 business days across India. Metro cities typically receive orders within 3-4 days."
            },
            {
                q: "Do you offer free shipping?",
                a: "Yes! We offer free shipping on all orders above ₹500. Orders below ₹500 have a flat shipping fee of ₹50."
            },
            {
                q: "Can I track my order?",
                a: "Absolutely! Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order from your dashboard."
            },
            {
                q: "What if my order is delayed?",
                a: "Contact us immediately at +91 7060999077 or contact@zenviacare.com. We'll track your order and resolve the issue promptly."
            }
        ]
    },
    {
        category: "Products",
        questions: [
            {
                q: "Are your products authentic Thai products?",
                a: "Yes! All our products are imported directly from Thailand. We guarantee 100% authenticity and quality."
            },
            {
                q: "How do I know which product is right for me?",
                a: "Each product page has detailed descriptions and benefits. You can also contact our customer support for personalized recommendations."
            },
            {
                q: "Do you offer product samples?",
                a: "Currently, we don't offer samples, but we have a hassle-free return policy if you're not satisfied with your purchase."
            },
            {
                q: "Are the products safe for sensitive skin?",
                a: "Our products are made from natural ingredients. However, we recommend doing a patch test first if you have sensitive skin."
            }
        ]
    },
    {
        category: "Massage Services",
        questions: [
            {
                q: "How do I book a massage appointment?",
                a: "You can book online through our website or call us at +91 7060999077. Login to your account and visit the Booking page."
            },
            {
                q: "Can I cancel or reschedule my appointment?",
                a: "Yes! You can cancel or reschedule up to 24 hours before your appointment without any charges."
            },
            {
                q: "What should I bring to my appointment?",
                a: "Just yourself! We provide everything you need including towels, robes, and premium oils."
            },
            {
                q: "Are your therapists certified?",
                a: "Yes! All our therapists are trained in traditional Thai massage techniques and are certified professionals."
            },
            {
                q: "Do you have locations in my city?",
                a: "We have 15+ parlours across major Indian cities. Contact us to find the nearest location to you."
            }
        ]
    },
    {
        category: "Payment & Refunds",
        questions: [
            {
                q: "What payment methods do you accept?",
                a: "We accept credit/debit cards, UPI, net banking, and digital wallets through our secure payment gateway."
            },
            {
                q: "Is it safe to pay online?",
                a: "Absolutely! We use industry-standard encryption and secure payment gateways to protect your information."
            },
            {
                q: "What is your refund policy?",
                a: "We offer a 7-day return policy for unopened products. Refunds are processed within 5-7 business days after we receive the returned item."
            },
            {
                q: "Can I get a refund for massage services?",
                a: "Cancellations made 24+ hours before the appointment receive a full refund. Late cancellations may incur a fee."
            }
        ]
    },
    {
        category: "Account & Support",
        questions: [
            {
                q: "Do I need an account to place an order?",
                a: "Yes, you need to create an account to place orders and book services. It's quick and free!"
            },
            {
                q: "I forgot my password. What should I do?",
                a: "Click 'Forgot Password' on the login page and follow the instructions to reset your password."
            },
            {
                q: "How can I contact customer support?",
                a: "You can reach us via phone (+91 7060999077), email (contact@zenviacare.com), or WhatsApp. We're available Mon-Sat, 9 AM - 8 PM."
            },
            {
                q: "Do you have a loyalty program?",
                a: "Yes! Earn points with every purchase and booking. Points can be redeemed for discounts on future orders."
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
                    <p className={styles.heroSubtitle}>
                        Find answers to common questions about our products and services
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="section">
                <div className="container">
                    <div className={styles.faqContainer}>
                        {FAQS.map((category, idx) => (
                            <div key={idx} className={styles.categorySection}>
                                <h2 className={styles.categoryTitle}>{category.category}</h2>
                                <div className={styles.questionsGrid}>
                                    {category.questions.map((faq, qIdx) => (
                                        <div key={qIdx} className={styles.faqCard}>
                                            <h3 className={styles.question}>
                                                <span className={styles.qIcon}>Q</span>
                                                {faq.q}
                                            </h3>
                                            <p className={styles.answer}>
                                                <span className={styles.aIcon}>A</span>
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Still Have Questions?</h2>
                    <p>Our customer support team is here to help!</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className="btn btn-accent">
                            Contact Us
                        </Link>
                        <a href="tel:+917060999077" className="btn btn-primary">
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
