'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './checkout.module.css';

export default function CheckoutPage() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });

    const [loading, setLoading] = useState(false);

    // Protect route - redirect if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
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

    // Redirect if cart is empty
    useEffect(() => {
        if (cartItems.length === 0) {
            router.push('/cart');
        }
    }, [cartItems, router]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Prepare order data with user ID
            const orderData = {
                items: cartItems.map(item => ({
                    productId: item.id,
                    name: item.name,
                    price: parseFloat(item.price.replace('₹', '')),
                    quantity: item.quantity,
                    image: item.image
                })),
                shippingAddress: formData,
                totalAmount: cartTotal,
                userId: user.id  // Add user ID
            };

            // Save order to database
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });

            const data = await response.json();

            if (data.success) {
                alert(`Order placed successfully! Your order number is: ${data.order.order_number}`);
                clearCart();
                router.push('/');
            } else {
                alert('Error placing order: ' + data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Show loading while checking auth and cart
    if (authLoading || !user || cartItems.length === 0) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center' }}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">Checkout</h1>

            <div className={styles.checkoutContainer}>
                <div className={styles.checkoutForm}>
                    <h2>Shipping Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Email *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Address *</label>
                            <textarea
                                name="address"
                                required
                                rows="3"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>State *</label>
                                <input
                                    type="text"
                                    name="state"
                                    required
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Pincode *</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    required
                                    value={formData.pincode}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                            {loading ? 'Placing Order...' : 'Place Order'}
                        </button>
                    </form>
                </div>

                <div className={styles.orderSummary}>
                    <h2>Order Summary</h2>
                    <div className={styles.orderItems}>
                        {cartItems.map((item) => (
                            <div key={item.id} className={styles.orderItem}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Qty: {item.quantity}</p>
                                </div>
                                <span>₹{(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.summaryRow}>
                        <span>Subtotal:</span>
                        <span>₹{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span>Total:</span>
                        <span>₹{cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
