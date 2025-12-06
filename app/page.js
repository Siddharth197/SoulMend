'use client';

import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Link from 'next/link';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>{t('happyCustomers')}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>{t('naturalProducts')}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>{t('locations')}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>4.9★</div>
              <div className={styles.statLabel}>{t('customerRating')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('featuredProducts')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('featuredSubtitle')}
          </p>
          <ProductGrid limit={3} />
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/shop" className="btn btn-primary">
              {t('viewAllProducts')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className="container">
          <h2 className="section-title">{t('whyChooseUs')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('whyChooseSubtitle')}
          </p>
          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} fade-in-up`}>
              <div className={styles.featureIcon}>🌿</div>
              <h3>{t('naturalIngredients')}</h3>
              <p>{t('naturalDesc')}</p>
            </div>
            <div className={`${styles.featureCard} fade-in-up`}>
              <div className={styles.featureIcon}>✨</div>
              <h3>{t('premiumQuality')}</h3>
              <p>{t('premiumDesc')}</p>
            </div>
            <div className={`${styles.featureCard} fade-in-up`}>
              <div className={styles.featureIcon}>💆</div>
              <h3>{t('expertCare')}</h3>
              <p>{t('expertDesc')}</p>
            </div>
            <div className={`${styles.featureCard} fade-in-up`}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>{t('secureShopping')}</h3>
              <p>{t('secureDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('ourServices')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('servicesSubtitle')}
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage} style={{ backgroundImage: 'url(/images/service-foot.png)' }}>
                <div className={styles.serviceBadge}>Popular</div>
              </div>
              <div className={styles.serviceContent}>
                <h3>Thai Foot Massage</h3>
                <p className={styles.serviceDuration}>60 minutes</p>
                <p className={styles.serviceDescription}>
                  Relax and rejuvenate with our authentic Thai foot massage techniques using premium oils and herbs.
                </p>
                <div className={styles.serviceFooter}>
                  <span className={styles.servicePrice}>₹999</span>
                  <Link href="/services" className="btn btn-secondary">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImage} style={{ backgroundImage: 'url(/images/service-body.png)' }}>
                <div className={styles.serviceBadge}>Best Value</div>
              </div>
              <div className={styles.serviceContent}>
                <h3>Full Body Therapy</h3>
                <p className={styles.serviceDuration}>90 minutes</p>
                <p className={styles.serviceDescription}>
                  Complete relief from stress and muscle tension using our premium Thai oils and traditional methods.
                </p>
                <div className={styles.serviceFooter}>
                  <span className={styles.servicePrice}>₹1,499</span>
                  <Link href="/services" className="btn btn-secondary">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImage} style={{ backgroundImage: 'url(/images/spa-1.png)' }}>
                <div className={styles.serviceBadge}>New</div>
              </div>
              <div className={styles.serviceContent}>
                <h3>Head & Shoulder</h3>
                <p className={styles.serviceDuration}>45 minutes</p>
                <p className={styles.serviceDescription}>
                  Targeted relief for neck, shoulder, and head tension with aromatic Thai herbal oils.
                </p>
                <div className={styles.serviceFooter}>
                  <span className={styles.servicePrice}>₹799</span>
                  <Link href="/services" className="btn btn-secondary">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/booking" className="btn btn-accent">
              {t('bookAppointment')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Real experiences from our valued customers
          </p>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialText}>
                "The relief balm is amazing! My foot pain disappeared after just a few applications. Highly recommend!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>P</div>
                <div>
                  <div className={styles.authorName}>Priya Sharma</div>
                  <div className={styles.authorLocation}>Mumbai</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialText}>
                "Best Thai massage experience in India. The therapists are highly skilled and professional."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>R</div>
                <div>
                  <div className={styles.authorName}>Rahul Kumar</div>
                  <div className={styles.authorLocation}>Delhi</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialText}>
                "Natural products that actually work. The sleep balm has improved my sleep quality significantly!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>A</div>
                <div>
                  <div className={styles.authorName}>Anjali Mehta</div>
                  <div className={styles.authorLocation}>Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Experience Natural Healing?</h2>
            <p>Shop our premium Thai products or book a massage session today</p>
            <div className={styles.ctaButtons}>
              <Link href="/shop" className="btn btn-primary">
                Shop Products
              </Link>
              <Link href="/booking" className="btn btn-accent">
                Book Massage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
