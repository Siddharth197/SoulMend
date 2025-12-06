'use client';

import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import styles from './product.module.css';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${params.id}`);
                const data = await response.json();

                if (data.success) {
                    setProduct(data.product);
                } else {
                    setError('Product not found');
                }
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchProduct();
        }
    }, [params.id]);

    const handleAddToCart = () => {
        if (!product) return;

        // Add to cart multiple times based on quantity
        // Note: Better implementation would be to pass quantity to addToCart context
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        alert(`Added ${quantity} ${product.name} to cart!`);
    };

    if (loading) {
        return (
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <div className={styles.loader}>Loading product details...</div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h1>Product Not Found</h1>
                <p>{error || 'The product you are looking for does not exist.'}</p>
                <button onClick={() => router.push('/shop')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Back to Shop
                </button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <button onClick={() => router.push('/shop')} style={{ marginBottom: '2rem', background: 'none', border: 'none', color: 'var(--primary-green)', cursor: 'pointer', fontSize: '1rem' }}>
                ← Back to Shop
            </button>

            <div className={styles.productDetail}>
                <div className={styles.imageSection}>
                    <img src={product.image} alt={product.name} className={styles.mainImage} />
                </div>

                <div className={styles.infoSection}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <div className={styles.price}>
                        {/* Handle both number and string prices if necessary */}
                        {typeof product.price === 'number' ? `₹${product.price}` : product.price}
                    </div>

                    <p className={styles.description}>
                        {product.long_description || product.description}
                    </p>

                    <div className={styles.quantitySection}>
                        <label>Quantity:</label>
                        <div className={styles.quantityControls}>
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>

                    <button onClick={handleAddToCart} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        Add to Cart
                    </button>

                    <div className={styles.details}>
                        {product.ingredients && product.ingredients.length > 0 && (
                            <>
                                <h3>Key Ingredients</h3>
                                <ul>
                                    {product.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {product.benefits && product.benefits.length > 0 && (
                            <>
                                <h3>Benefits</h3>
                                <ul>
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
