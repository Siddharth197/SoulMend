'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import styles from './booking.module.css';

const SERVICES = [
    { id: 1, name: 'Thai Foot Massage', duration: '60 min', price: '₹999' },
    { id: 2, name: 'Full Body Therapy', duration: '90 min', price: '₹1499' },
    { id: 3, name: 'Head & Shoulder Massage', duration: '45 min', price: '₹799' }
];

const LOCATIONS = [
    'Mumbai - Andheri',
    'Delhi - Connaught Place',
    'Bangalore - Koramangala',
    'Pune - Viman Nagar'
];

const TIME_SLOTS = [
    '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

export default function BookingPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [formData, setFormData] = useState({
        service: '',
        location: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: ''
    });

    const [loading, setLoading] = useState(false);

    // Protect route - redirect if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            alert('Please login to book a service');
            router.push('/login');
        }
    }, [user, authLoading, router]);

    // Pre-fill form with user data
    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                email: user.email || '',
                name: user.user_metadata?.full_name || ''
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Save booking to database with user ID
            const bookingData = {
                ...formData,
                userId: user?.id
            };

            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData)
            });

            const data = await response.json();

            if (data.success) {
                alert(`Booking confirmed! Your booking number is: ${data.booking.booking_number}\nWe will send you a confirmation email shortly.`);
                router.push('/');
            } else {
                alert('Error creating booking: ' + data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create booking. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    // Show loading while checking auth
    if (authLoading || !user) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center' }}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">Book Your Appointment</h1>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: '#666' }}>
                Choose your preferred service, location, and time slot. We'll confirm your booking shortly.
            </p>

            <div className={styles.bookingContainer}>
                <form onSubmit={handleSubmit} className={styles.bookingForm}>
                    <div className={styles.section}>
                        <h2>Select Service</h2>
                        <div className={styles.serviceGrid}>
                            {SERVICES.map(service => (
                                <label key={service.id} className={`${styles.serviceCard} ${formData.service === service.name ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name="service"
                                        value={service.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div>
                                        <h3>{service.name}</h3>
                                        <p>{service.duration}</p>
                                        <p className={styles.servicePrice}>{service.price}</p>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Location & Date</h2>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Location *</label>
                                <select name="location" value={formData.location} onChange={handleChange} required>
                                    <option value="">Select Location</option>
                                    {LOCATIONS.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Date *</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={today}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Select Time Slot</h2>
                        <div className={styles.timeGrid}>
                            {TIME_SLOTS.map(time => (
                                <label key={time} className={`${styles.timeSlot} ${formData.time === time ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name="time"
                                        value={time}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span>{time}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Your Details</h2>
                        <div className={styles.formGroup}>
                            <label>Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={loading}>
                        {loading ? 'Confirming Booking...' : 'Confirm Booking'}
                    </button>
                </form>
            </div>
        </div>
    );
}
