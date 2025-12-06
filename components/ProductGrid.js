'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './ProductGrid.module.css';

const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: 'Relief Balm - Purple',
        price: 399,
        image: '/images/product_1.jpg',
        description: 'Soothing relief balm for your soles.',
        badge: 'Bestseller',
        rating: 4.8
    },
    {
        id: 2,
        name: 'Relief Balm - 50g',
        price: 499,
        image: '/images/product_2.jpg',
        description: 'Premium relief balm for complete care.',
        badge: 'New',
        rating: 4.9
    },
    {
        id: 3,
        name: 'Relief Balm - 30g',
        price: 299,
        image: '/images/product_3.jpg',
        description: 'Compact relief balm, perfect for travel.',
        badge: 'Popular',
        rating: 4.7
    }
];

export default function ProductGrid({ limit, products }) {
    const { addToCart } = useCart();
    const displayProducts = products || (limit ? DEFAULT_PRODUCTS.slice(0, limit) : DEFAULT_PRODUCTS);

    return (
        <div className={styles.grid}>
            {displayProducts.map((product) => (
                <div key={product.id} className={styles.card}>
                    <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
                        {product.badge && (
                            <span className={`${styles.badge} ${styles[product.badge.toLowerCase()]}`}>
                                {product.badge}
                            </span>
                        )}
                        <img src={product.image} alt={product.name} className={styles.image} />
                    </Link>
                    <div className={styles.content}>
                        <Link href={`/product/${product.id}`}>
                            <h3 className={styles.name}>{product.name}</h3>
                        </Link>
                        {product.rating && (
                            <div className={styles.rating}>
                                <span className={styles.stars}>★★★★★</span>
                                <span className={styles.ratingText}>{product.rating}</span>
                            </div>
                        )}
                        <p className={styles.description}>{product.description}</p>
                        <div className={styles.footer}>
                            <div className={styles.priceContainer}>
                                <span className={styles.price}>₹{product.price}</span>
                                <span className={styles.priceLabel}>MRP</span>
                            </div>
                            <button
                                className={styles.button}
                                onClick={() => addToCart({ ...product, price: `₹${product.price}` })}
                            >
                                <span className={styles.cartIcon}>🛒</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
