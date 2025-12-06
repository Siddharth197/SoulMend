import styles from './shipping.module.css';

export default function ShippingPage() {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <h1>Shipping & Returns Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: December 5, 2024</p>

                <section className={styles.section}>
                    <h2>📦 Shipping Policy</h2>

                    <h3>Shipping Charges</h3>
                    <div className={styles.shippingTable}>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCell}><strong>Order Value</strong></div>
                            <div className={styles.tableCell}><strong>Shipping Cost</strong></div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCell}>Above ₹500</div>
                            <div className={styles.tableCell}>FREE</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCell}>Below ₹500</div>
                            <div className={styles.tableCell}>₹50</div>
                        </div>
                    </div>

                    <h3>Delivery Timeline</h3>
                    <ul>
                        <li><strong>Metro Cities:</strong> 3-4 business days</li>
                        <li><strong>Other Cities:</strong> 5-7 business days</li>
                        <li><strong>Remote Areas:</strong> 7-10 business days</li>
                    </ul>

                    <h3>Order Processing</h3>
                    <ul>
                        <li>Orders are processed within 24 hours of payment confirmation</li>
                        <li>Orders placed on weekends/holidays are processed the next business day</li>
                        <li>You will receive a tracking number via email and SMS once shipped</li>
                    </ul>

                    <h3>Shipping Partners</h3>
                    <p>We ship via trusted courier partners including:</p>
                    <ul>
                        <li>Delhivery</li>
                        <li>Blue Dart</li>
                        <li>DTDC</li>
                        <li>India Post</li>
                    </ul>

                    <h3>Tracking Your Order</h3>
                    <ul>
                        <li>Track your order from your account dashboard</li>
                        <li>Use the tracking number provided in your email</li>
                        <li>Contact us if you don't receive tracking info within 48 hours</li>
                    </ul>

                    <h3>Delivery Issues</h3>
                    <ul>
                        <li>Ensure someone is available to receive the package</li>
                        <li>Inspect the package before accepting delivery</li>
                        <li>Report any damage immediately to the courier and us</li>
                        <li>We are not responsible for delays by courier partners</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>↩️ Returns Policy</h2>

                    <h3>Return Eligibility</h3>
                    <p>Products can be returned if:</p>
                    <ul>
                        <li>Product is unopened and unused</li>
                        <li>Original packaging is intact</li>
                        <li>Return requested within 7 days of delivery</li>
                        <li>Product is not damaged due to misuse</li>
                    </ul>

                    <h3>Non-Returnable Items</h3>
                    <ul>
                        <li>Opened or used products (for hygiene reasons)</li>
                        <li>Products without original packaging</li>
                        <li>Sale or clearance items</li>
                        <li>Gift cards or vouchers</li>
                    </ul>

                    <h3>How to Return</h3>
                    <ol>
                        <li>Contact us at contact@zenviacare.com or +91 7060999077</li>
                        <li>Provide your order number and reason for return</li>
                        <li>We'll send you return instructions and address</li>
                        <li>Pack the product securely in original packaging</li>
                        <li>Ship the product to our return address</li>
                    </ol>

                    <h3>Return Shipping</h3>
                    <ul>
                        <li>Customer bears return shipping costs (unless product is defective)</li>
                        <li>We recommend using a trackable shipping method</li>
                        <li>We are not responsible for items lost in return transit</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>💰 Refund Policy</h2>

                    <h3>Refund Processing</h3>
                    <ul>
                        <li>Refunds initiated after we receive and inspect the returned product</li>
                        <li>Processing time: 5-7 business days</li>
                        <li>Refund credited to original payment method</li>
                        <li>Bank processing may take additional 3-5 days</li>
                    </ul>

                    <h3>Refund Amount</h3>
                    <ul>
                        <li>Full product price refunded</li>
                        <li>Original shipping charges are non-refundable</li>
                        <li>Return shipping costs are not refunded</li>
                    </ul>

                    <h3>Partial Refunds</h3>
                    <p>Partial refunds may be issued for:</p>
                    <ul>
                        <li>Products with signs of use</li>
                        <li>Products not in original condition</li>
                        <li>Products with missing parts or accessories</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>🔄 Exchange Policy</h2>

                    <h3>Product Exchange</h3>
                    <ul>
                        <li>Exchanges allowed within 7 days of delivery</li>
                        <li>Product must be unused and in original packaging</li>
                        <li>Exchange for same product or equal value</li>
                        <li>Subject to stock availability</li>
                    </ul>

                    <h3>Defective Products</h3>
                    <ul>
                        <li>Report defects within 48 hours of delivery</li>
                        <li>Provide photos of the defective product</li>
                        <li>We'll arrange free replacement or full refund</li>
                        <li>Return shipping covered by us for defective items</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>🎁 Cancellation Policy</h2>

                    <h3>Order Cancellation</h3>
                    <ul>
                        <li>Orders can be cancelled before shipping</li>
                        <li>Contact us immediately to cancel</li>
                        <li>Full refund if cancelled before dispatch</li>
                        <li>Cannot cancel once shipped</li>
                    </ul>

                    <h3>Service Booking Cancellation</h3>
                    <ul>
                        <li>Cancel 24+ hours before appointment: Full refund</li>
                        <li>Cancel within 24 hours: 50% cancellation fee</li>
                        <li>No-show: No refund</li>
                        <li>Reschedule allowed once without charges</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>📞 Contact Us</h2>
                    <p>For shipping or return queries:</p>
                    <div className={styles.contactBox}>
                        <p><strong>Customer Support</strong></p>
                        <p>Email: contact@zenviacare.com</p>
                        <p>Phone: +91 7060999077</p>
                        <p>WhatsApp: +91 7060999077</p>
                        <p>Hours: Mon-Sat, 9 AM - 8 PM</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
