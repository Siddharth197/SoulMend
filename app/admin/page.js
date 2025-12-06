'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './admin.module.css';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('products');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.loginContainer}>
                <div className={styles.loginBox}>
                    <h1>Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className={styles.formGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter admin password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                            Demo password: admin123
                        </p>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.adminContainer}>
            <div className={styles.sidebar}>
                <h2>Admin Panel</h2>
                <nav className={styles.nav}>
                    <button
                        className={activeTab === 'products' ? styles.active : ''}
                        onClick={() => setActiveTab('products')}
                    >
                        📦 Products
                    </button>
                    <button
                        className={activeTab === 'orders' ? styles.active : ''}
                        onClick={() => setActiveTab('orders')}
                    >
                        🛒 Orders
                    </button>
                    <button
                        className={activeTab === 'bookings' ? styles.active : ''}
                        onClick={() => setActiveTab('bookings')}
                    >
                        📅 Bookings
                    </button>
                    <button
                        className={activeTab === 'settings' ? styles.active : ''}
                        onClick={() => setActiveTab('settings')}
                    >
                        ⚙️ Settings
                    </button>
                </nav>
                <button
                    onClick={() => setIsAuthenticated(false)}
                    className={styles.logoutBtn}
                >
                    Logout
                </button>
            </div>

            <div className={styles.mainContent}>
                {activeTab === 'products' && <ProductManagement />}
                {activeTab === 'orders' && <OrderManagement />}
                {activeTab === 'bookings' && <BookingManagement />}
                {activeTab === 'settings' && <Settings />}
            </div>
        </div>
    );
}

function ProductManagement() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
        image: ''
    });
    const [imagePreview, setImagePreview] = useState('');

    // Fetch products from database
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            if (data.success) {
                setProducts(data.products);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            alert('Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingProduct) {
                // Update existing product
                const response = await fetch(`/api/products/${editingProduct.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();

                if (data.success) {
                    alert('Product updated successfully!');
                    fetchProducts();
                } else {
                    alert('Error: ' + data.error);
                }
            } else {
                // Create new product
                const response = await fetch('/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();

                if (data.success) {
                    alert('Product created successfully!');
                    fetchProducts();
                } else {
                    alert('Error: ' + data.error);
                }
            }

            setFormData({ name: '', price: '', stock: '', description: '', image: '' });
            setImagePreview('');
            setShowAddForm(false);
            setEditingProduct(null);
        } catch (error) {
            console.error('Error saving product:', error);
            alert('Failed to save product');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            price: product.price.toString(),
            stock: product.stock.toString(),
            description: product.description || '',
            image: product.image
        });
        setImagePreview(product.image);
        setShowAddForm(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        setLoading(true);
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();

            if (data.success) {
                alert('Product deleted successfully!');
                fetchProducts();
            } else {
                alert('Error: ' + data.error);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product');
        } finally {
            setLoading(false);
        }
    };

    if (loading && products.length === 0) {
        return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading products...</div>;
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>Product Management</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setShowAddForm(!showAddForm);
                        setEditingProduct(null);
                        setFormData({ name: '', price: '', stock: '', description: '', image: '' });
                        setImagePreview('');
                    }}
                >
                    {showAddForm ? 'Cancel' : '+ Add Product'}
                </button>
            </div>

            {showAddForm && (
                <div className={styles.formCard}>
                    <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Product Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Price (₹) *</label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Stock Quantity *</label>
                                <input
                                    type="number"
                                    value={formData.stock}
                                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Product Image *</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ padding: '0.5rem' }}
                                />
                            </div>
                        </div>

                        {imagePreview && (
                            <div className={styles.imagePreview}>
                                <label>Image Preview:</label>
                                <img src={imagePreview} alt="Preview" />
                            </div>
                        )}

                        <div className={styles.formGroup}>
                            <label>Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows="3"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Saving...' : (editingProduct ? 'Update Product' : 'Add Product')}
                        </button>
                    </form>
                </div>
            )}

            <div className={styles.productGrid}>
                {products.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.name} />
                        <div className={styles.productInfo}>
                            <h3>{product.name}</h3>
                            <p className={styles.price}>₹{product.price}</p>
                            <p className={styles.stock}>Stock: {product.stock} units</p>
                        </div>
                        <div className={styles.productActions}>
                            <button onClick={() => handleEdit(product)} className={styles.editBtn} disabled={loading}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(product.id)} className={styles.deleteBtn} disabled={loading}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function OrderManagement() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedOrder, setExpandedOrder] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            const data = await response.json();
            if (data.success) {
                setOrders(data.orders);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const toggleOrderDetails = (orderId) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId);
    };

    if (loading) {
        return <div style={{ padding: '2rem' }}>Loading orders...</div>;
    }

    return (
        <div>
            <h1>Order Management</h1>
            {orders.length === 0 ? (
                <p style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                    No orders yet. Orders will appear here when customers place them.
                </p>
            ) : (
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order Number</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <React.Fragment key={order.id}>
                                    <tr>
                                        <td><strong>{order.order_number}</strong></td>
                                        <td>{order.shipping_address?.name || 'N/A'}</td>
                                        <td>₹{order.total_amount}</td>
                                        <td>
                                            <span className={`${styles.badge} ${styles[order.status]}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>{formatDate(order.created_at)}</td>
                                        <td>
                                            <button
                                                className={styles.viewBtn}
                                                onClick={() => toggleOrderDetails(order.id)}
                                            >
                                                {expandedOrder === order.id ? 'Hide' : 'View'}
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedOrder === order.id && (
                                        <tr>
                                            <td colSpan="6" style={{ background: '#f8f9fa', padding: '1.5rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                                    <div>
                                                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>Customer Details</h3>
                                                        <p><strong>Name:</strong> {order.shipping_address?.name}</p>
                                                        <p><strong>Email:</strong> {order.shipping_address?.email}</p>
                                                        <p><strong>Phone:</strong> {order.shipping_address?.phone}</p>
                                                        <p><strong>Address:</strong> {order.shipping_address?.address}</p>
                                                        <p><strong>City:</strong> {order.shipping_address?.city}, {order.shipping_address?.state} - {order.shipping_address?.pincode}</p>
                                                    </div>
                                                    <div>
                                                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>Order Items</h3>
                                                        {order.items?.map((item, idx) => (
                                                            <div key={idx} style={{ marginBottom: '0.5rem', padding: '0.5rem', background: 'white', borderRadius: '4px' }}>
                                                                <strong>{item.name}</strong> x {item.quantity} - ₹{item.price * item.quantity}
                                                            </div>
                                                        ))}
                                                        <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'var(--primary-green)', color: 'white', borderRadius: '4px' }}>
                                                            <strong>Total: ₹{order.total_amount}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function BookingManagement() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedBooking, setExpandedBooking] = useState(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('/api/bookings');
            const data = await response.json();
            if (data.success) {
                setBookings(data.bookings);
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const toggleBookingDetails = (bookingId) => {
        setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
    };

    if (loading) {
        return <div style={{ padding: '2rem' }}>Loading bookings...</div>;
    }

    return (
        <div>
            <h1>Booking Management</h1>
            {bookings.length === 0 ? (
                <p style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                    No bookings yet. Bookings will appear here when customers book services.
                </p>
            ) : (
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Booking Number</th>
                                <th>Customer</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => (
                                <React.Fragment key={booking.id}>
                                    <tr>
                                        <td><strong>{booking.booking_number}</strong></td>
                                        <td>
                                            <div>{booking.customer_name}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>{booking.customer_phone}</div>
                                        </td>
                                        <td>{booking.service}</td>
                                        <td>{formatDate(booking.booking_date)}</td>
                                        <td>{booking.booking_time}</td>
                                        <td>
                                            <span className={`${styles.badge} ${styles.confirmed}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                className={styles.viewBtn}
                                                onClick={() => toggleBookingDetails(booking.id)}
                                            >
                                                {expandedBooking === booking.id ? 'Hide' : 'View'}
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedBooking === booking.id && (
                                        <tr>
                                            <td colSpan="7" style={{ background: '#f8f9fa', padding: '1.5rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                                    <div>
                                                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>Customer Details</h3>
                                                        <p><strong>Name:</strong> {booking.customer_name}</p>
                                                        <p><strong>Email:</strong> {booking.customer_email}</p>
                                                        <p><strong>Phone:</strong> {booking.customer_phone}</p>
                                                    </div>
                                                    <div>
                                                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>Booking Details</h3>
                                                        <p><strong>Service:</strong> {booking.service}</p>
                                                        <p><strong>Location:</strong> {booking.location}</p>
                                                        <p><strong>Date:</strong> {formatDate(booking.booking_date)}</p>
                                                        <p><strong>Time:</strong> {booking.booking_time}</p>
                                                        <p><strong>Status:</strong> <span className={`${styles.badge} ${styles.confirmed}`}>{booking.status}</span></p>
                                                        <p><strong>Booked on:</strong> {formatDate(booking.created_at)}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function Settings() {
    return (
        <div>
            <h1>Settings</h1>
            <div className={styles.settingsCard}>
                <h3>Site Settings</h3>
                <div className={styles.formGroup}>
                    <label>Site Name</label>
                    <input type="text" defaultValue="Soulmend" />
                </div>
                <div className={styles.formGroup}>
                    <label>Contact Email</label>
                    <input type="email" defaultValue="contact@soulmend.com" />
                </div>
                <div className={styles.formGroup}>
                    <label>Contact Phone</label>
                    <input type="tel" defaultValue="+91 98765 43210" />
                </div>
                <button className="btn btn-primary">Save Settings</button>
            </div>
        </div>
    );
}
