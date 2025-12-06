'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import styles from './cart.module.css';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h1 className="section-title">Your Cart</h1>
                <p style={{ marginBottom: '2rem', color: '#666' }}>Your cart is empty</p>
                <Link href="/shop" className="btn btn-primary">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">Your Cart</h1>

            <div className={styles.cartContainer}>
                <div className={styles.cartItems}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.image} alt={item.name} className={styles.itemImage} />
                            <div className={styles.itemDetails}>
                                <h3>{item.name}</h3>
                                <p className={styles.itemPrice}>{item.price}</p>
                            </div>
                            <div className={styles.quantityControls}>
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <div className={styles.itemTotal}>
                                ₹{(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}
                            </div>
                            <button
                                className={styles.removeBtn}
                                onClick={() => removeFromCart(item.id)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.cartSummary}>
                    <h2>Order Summary</h2>
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
                    <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                        Proceed to Checkout
                    </Link>
                    <button
                        onClick={clearCart}
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                            padding: '0.75rem',
                            background: 'transparent',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
