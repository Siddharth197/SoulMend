'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default function DashboardPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [activeTab, setActiveTab] = useState('orders');
    const [orders, setOrders] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    // Protect route - redirect if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/login');
        }
    }, [user, authLoading, router]);

    // Fetch user's orders and bookings
    useEffect(() => {
        if (user) {
            fetchUserData();
        }
    }, [user]);

    const fetchUserData = async () => {
        try {
            // Fetch orders
            const ordersRes = await fetch('/api/orders');
            const ordersData = await ordersRes.json();
            if (ordersData.success) {
                setOrders(ordersData.orders);
            }

            // Fetch bookings
            const bookingsRes = await fetch('/api/bookings');
            const bookingsData = await bookingsRes.json();
            if (bookingsData.success) {
                setBookings(bookingsData.bookings);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoadingData(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (authLoading || !user) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center' }}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">My Dashboard</h1>

            <div className={styles.dashboardContainer}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>
                            {user.user_metadata?.full_name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                        </div>
                        <h3>{user.user_metadata?.full_name || 'User'}</h3>
                        <p>{user.email}</p>
                    </div>

                    <nav className={styles.nav}>
                        <button
                            className={activeTab === 'orders' ? styles.active : ''}
                            onClick={() => setActiveTab('orders')}
                        >
                            📦 My Orders
                        </button>
                        <button
                            className={activeTab === 'bookings' ? styles.active : ''}
                            onClick={() => setActiveTab('bookings')}
                        >
                            📅 My Bookings
                        </button>
                        <button
                            className={activeTab === 'profile' ? styles.active : ''}
                            onClick={() => setActiveTab('profile')}
                        >
                            👤 Profile
                        </button>
                    </nav>
                </div>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    {activeTab === 'orders' && (
                        <div>
                            <h2>My Orders</h2>
                            {loadingData ? (
                                <p>Loading orders...</p>
                            ) : orders.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '3rem' }}>
                                    <p style={{ color: '#666', marginBottom: '1rem' }}>You haven't placed any orders yet.</p>
                                    <Link href="/shop" className="btn btn-primary">Start Shopping</Link>
                                </div>
                            ) : (
                                <div className={styles.ordersList}>
                                    {orders.map(order => (
                                        <div key={order.id} className={styles.orderCard}>
                                            <div className={styles.orderHeader}>
                                                <div>
                                                    <h3>Order #{order.order_number}</h3>
                                                    <p>Placed on {formatDate(order.created_at)}</p>
                                                </div>
                                                <span className={`${styles.status} ${styles[order.status]}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className={styles.orderDetails}>
                                                <p>{order.items?.length || 0} items</p>
                                                <p className={styles.total}>₹{order.total_amount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'bookings' && (
                        <div>
                            <h2>My Bookings</h2>
                            {loadingData ? (
                                <p>Loading bookings...</p>
                            ) : bookings.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '3rem' }}>
                                    <p style={{ color: '#666', marginBottom: '1rem' }}>You haven't made any bookings yet.</p>
                                    <Link href="/booking" className="btn btn-primary">Book a Service</Link>
                                </div>
                            ) : (
                                <div className={styles.bookingsList}>
                                    {bookings.map(booking => (
                                        <div key={booking.id} className={styles.bookingCard}>
                                            <div className={styles.bookingHeader}>
                                                <h3>{booking.service}</h3>
                                                <span className={`${styles.status} ${styles.confirmed}`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <div className={styles.bookingDetails}>
                                                <p>📅 {formatDate(booking.booking_date)} at {booking.booking_time}</p>
                                                <p>📍 {booking.location}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <Link href="/booking" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                                Book New Appointment
                            </Link>
                        </div>
                    )}

                    {activeTab === 'profile' && (
                        <div>
                            <h2>Profile Information</h2>
                            <div className={styles.profileForm}>
                                <div className={styles.formGroup}>
                                    <label>Full Name</label>
                                    <input type="text" value={user.user_metadata?.full_name || ''} readOnly />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input type="email" value={user.email} readOnly />
                                </div>
                                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
                                    Profile editing coming soon!
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
