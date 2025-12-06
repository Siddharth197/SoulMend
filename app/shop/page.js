'use client';

import { useState, useEffect } from 'react';
import ProductGrid from '@/components/ProductGrid';
import styles from './shop.module.css';

export default function ShopPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [priceFilter, setPriceFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [showFilters, setShowFilters] = useState(true);

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
        } finally {
            setLoading(false);
        }
    };

    let filteredProducts = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    // Price filter
    if (priceFilter === 'under300') {
        filteredProducts = filteredProducts.filter(p => p.price < 300);
    } else if (priceFilter === '300-500') {
        filteredProducts = filteredProducts.filter(p => p.price >= 300 && p.price <= 500);
    } else if (priceFilter === 'over500') {
        filteredProducts = filteredProducts.filter(p => p.price > 500);
    }

    // Sort
    if (sortBy === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    const clearFilters = () => {
        setPriceFilter('all');
        setCategoryFilter('all');
        setSortBy('default');
    };

    if (loading) {
        return (
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h1 className="section-title">Shop Our Products</h1>
                <div className={styles.loader}>Loading products...</div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">Shop Our Products</h1>
            <p className={styles.subtitle}>Discover authentic Thai healing products</p>

            <div className={styles.shopLayout}>
                {/* Sidebar Filters */}
                <aside className={`${styles.sidebar} ${showFilters ? styles.sidebarOpen : ''}`}>
                    <div className={styles.sidebarHeader}>
                        <h3>Filters</h3>
                        <button className={styles.clearBtn} onClick={clearFilters}>
                            Clear All
                        </button>
                    </div>

                    {/* Category Filter */}
                    <div className={styles.filterSection}>
                        <h4 className={styles.filterTitle}>Category</h4>
                        <div className={styles.filterOptions}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="category"
                                    value="all"
                                    checked={categoryFilter === 'all'}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                />
                                <span>All Products</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="category"
                                    value="balm"
                                    checked={categoryFilter === 'balm'}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                />
                                <span>Relief Balms</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="category"
                                    value="oil"
                                    checked={categoryFilter === 'oil'}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                />
                                <span>Massage Oils</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="category"
                                    value="sleep"
                                    checked={categoryFilter === 'sleep'}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                />
                                <span>Sleep Products</span>
                            </label>
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className={styles.filterSection}>
                        <h4 className={styles.filterTitle}>Price Range</h4>
                        <div className={styles.filterOptions}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="price"
                                    value="all"
                                    checked={priceFilter === 'all'}
                                    onChange={(e) => setPriceFilter(e.target.value)}
                                />
                                <span>All Prices</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="price"
                                    value="under300"
                                    checked={priceFilter === 'under300'}
                                    onChange={(e) => setPriceFilter(e.target.value)}
                                />
                                <span>Under ₹300</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="price"
                                    value="300-500"
                                    checked={priceFilter === '300-500'}
                                    onChange={(e) => setPriceFilter(e.target.value)}
                                />
                                <span>₹300 - ₹500</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="price"
                                    value="over500"
                                    checked={priceFilter === 'over500'}
                                    onChange={(e) => setPriceFilter(e.target.value)}
                                />
                                <span>Over ₹500</span>
                            </label>
                        </div>
                    </div>

                    {/* Sort By */}
                    <div className={styles.filterSection}>
                        <h4 className={styles.filterTitle}>Sort By</h4>
                        <select
                            className={styles.sortSelect}
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A to Z</option>
                        </select>
                    </div>
                </aside>

                {/* Products Area */}
                <div className={styles.productsArea}>
                    <div className={styles.productsHeader}>
                        <button
                            className={styles.toggleFilters}
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            {showFilters ? '✕ Hide' : '☰ Show'} Filters
                        </button>
                        <p className={styles.resultCount}>
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                        </p>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <ProductGrid products={filteredProducts} />
                    ) : (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>🔍</div>
                            <h3>No products found</h3>
                            <p>Try adjusting your filters to see more results</p>
                            <button className="btn btn-primary" onClick={clearFilters}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
