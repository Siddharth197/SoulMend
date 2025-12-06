import { Resend } from 'resend';

// Initialize with existing key or dummy key for build time
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

// Email templates
const getWelcomeEmailHTML = (name) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to SoulMend</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #FAF8F3;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF8F3; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2E5C55 0%, #1a4038 100%); padding: 40px; text-align: center;">
                            <h1 style="color: #F8F0E3; margin: 0; font-size: 32px;">Welcome to SoulMend! 🌿</h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="color: #2E5C55; margin: 0 0 20px 0;">Hello ${name}!</h2>
                            <p style="color: #555; line-height: 1.8; font-size: 16px; margin: 0 0 20px 0;">
                                Thank you for joining SoulMend - your destination for authentic Thai wellness products and traditional massage services.
                            </p>
                            <p style="color: #555; line-height: 1.8; font-size: 16px; margin: 0 0 20px 0;">
                                We're excited to be part of your wellness journey. Here's what you can explore:
                            </p>
                            
                            <!-- Features -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                                <tr>
                                    <td style="padding: 15px; background-color: #F5F1E8; border-radius: 8px; margin-bottom: 10px;">
                                        <strong style="color: #2E5C55;">🛍️ Premium Thai Products</strong><br>
                                        <span style="color: #666; font-size: 14px;">Authentic balms, oils, and herbal remedies</span>
                                    </td>
                                </tr>
                                <tr><td style="height: 10px;"></td></tr>
                                <tr>
                                    <td style="padding: 15px; background-color: #F5F1E8; border-radius: 8px;">
                                        <strong style="color: #2E5C55;">💆‍♂️ Massage Services</strong><br>
                                        <span style="color: #666; font-size: 14px;">Traditional Thai massage at 15+ locations</span>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="https://soulmend.com/shop" style="display: inline-block; background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%); color: #1a1a1a; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                                            Start Shopping
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="color: #555; line-height: 1.8; font-size: 14px; margin: 30px 0 0 0;">
                                Need help? Contact us at <a href="mailto:contact@zenviacare.com" style="color: #2E5C55;">contact@zenviacare.com</a> or call +91 7060999077
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #F5F1E8; padding: 30px; text-align: center;">
                            <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">
                                <strong>SoulMend</strong> - Relief for Your Soles
                            </p>
                            <p style="color: #888; font-size: 12px; margin: 0;">
                                Operated by Zenvia Care India Pvt Ltd
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

const getOrderConfirmationHTML = (orderData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #FAF8F3;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF8F3; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2E5C55 0%, #1a4038 100%); padding: 40px; text-align: center;">
                            <h1 style="color: #F8F0E3; margin: 0; font-size: 32px;">Order Confirmed! ✅</h1>
                            <p style="color: #F8F0E3; margin: 10px 0 0 0; opacity: 0.9;">Order #${orderData.id}</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="color: #555; line-height: 1.8; font-size: 16px; margin: 0 0 30px 0;">
                                Thank you for your order! We're preparing your items for shipment.
                            </p>
                            
                            <!-- Order Items -->
                            <h3 style="color: #2E5C55; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #D4AF37;">
                                Order Details
                            </h3>
                            
                            ${orderData.items.map(item => `
                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                                    <tr>
                                        <td width="80%" style="padding: 10px 0;">
                                            <strong style="color: #2E5C55;">${item.name}</strong><br>
                                            <span style="color: #888; font-size: 14px;">Quantity: ${item.quantity}</span>
                                        </td>
                                        <td width="20%" align="right" style="padding: 10px 0;">
                                            <strong style="color: #2E5C55;">₹${item.price * item.quantity}</strong>
                                        </td>
                                    </tr>
                                </table>
                            `).join('')}
                            
                            <!-- Total -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0; padding: 20px 0; border-top: 2px solid #E8E3D8;">
                                <tr>
                                    <td width="70%"><strong style="color: #2E5C55; font-size: 18px;">Total:</strong></td>
                                    <td width="30%" align="right"><strong style="color: #2E5C55; font-size: 18px;">₹${orderData.total}</strong></td>
                                </tr>
                            </table>
                            
                            <!-- Shipping Info -->
                            <div style="background-color: #F5F1E8; padding: 20px; border-radius: 8px; margin: 30px 0;">
                                <h4 style="color: #2E5C55; margin: 0 0 10px 0;">Shipping Address</h4>
                                <p style="color: #555; margin: 0; line-height: 1.6;">
                                    ${orderData.address}<br>
                                    ${orderData.city}, ${orderData.state} ${orderData.pincode}
                                </p>
                            </div>
                            
                            <p style="color: #555; line-height: 1.8; font-size: 14px; margin: 30px 0 0 0;">
                                <strong>Estimated Delivery:</strong> 3-7 business days<br>
                                You'll receive tracking information once your order ships.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #F5F1E8; padding: 30px; text-align: center;">
                            <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">
                                Questions? Contact us at contact@zenviacare.com
                            </p>
                            <p style="color: #888; font-size: 12px; margin: 0;">
                                © 2024 SoulMend - Zenvia Care India Pvt Ltd
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

const getBookingConfirmationHTML = (bookingData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #FAF8F3;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF8F3; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2E5C55 0%, #1a4038 100%); padding: 40px; text-align: center;">
                            <h1 style="color: #F8F0E3; margin: 0; font-size: 32px;">Booking Confirmed! 💆‍♂️</h1>
                            <p style="color: #F8F0E3; margin: 10px 0 0 0; opacity: 0.9;">Booking #${bookingData.id}</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="color: #555; line-height: 1.8; font-size: 16px; margin: 0 0 30px 0;">
                                Your massage appointment has been confirmed. We look forward to serving you!
                            </p>
                            
                            <!-- Booking Details -->
                            <div style="background-color: #F5F1E8; padding: 25px; border-radius: 8px; margin: 20px 0;">
                                <h3 style="color: #2E5C55; margin: 0 0 20px 0;">Appointment Details</h3>
                                
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="padding: 10px 0;">
                                            <strong style="color: #2E5C55;">Service:</strong><br>
                                            <span style="color: #555;">${bookingData.service}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0;">
                                            <strong style="color: #2E5C55;">Date & Time:</strong><br>
                                            <span style="color: #555;">${bookingData.date} at ${bookingData.time}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0;">
                                            <strong style="color: #2E5C55;">Duration:</strong><br>
                                            <span style="color: #555;">${bookingData.duration}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0;">
                                            <strong style="color: #2E5C55;">Location:</strong><br>
                                            <span style="color: #555;">${bookingData.location}</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <!-- Important Info -->
                            <div style="background-color: #FFF9E6; border-left: 4px solid #D4AF37; padding: 15px; margin: 20px 0;">
                                <p style="color: #555; margin: 0; font-size: 14px; line-height: 1.6;">
                                    <strong>Please Note:</strong><br>
                                    • Arrive 10 minutes early<br>
                                    • Cancellations must be made 24 hours in advance<br>
                                    • Bring a valid ID
                                </p>
                            </div>
                            
                            <p style="color: #555; line-height: 1.8; font-size: 14px; margin: 30px 0 0 0;">
                                Need to reschedule? Call us at +91 7060999077
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #F5F1E8; padding: 30px; text-align: center;">
                            <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">
                                We can't wait to see you!
                            </p>
                            <p style="color: #888; font-size: 12px; margin: 0;">
                                © 2024 SoulMend - Zenvia Care India Pvt Ltd
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

// Email sending functions
export async function sendWelcomeEmail(to, name) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'SoulMend <onboarding@resend.dev>', // Change to your domain later
            to: [to],
            subject: 'Welcome to SoulMend! 🌿',
            html: getWelcomeEmailHTML(name),
        });

        if (error) {
            console.error('Error sending welcome email:', error);
            return { success: false, error };
        }

        console.log('Welcome email sent:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return { success: false, error };
    }
}

export async function sendOrderConfirmation(to, orderData) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'SoulMend Orders <onboarding@resend.dev>',
            to: [to],
            subject: `Order Confirmed #${orderData.id} ✅`,
            html: getOrderConfirmationHTML(orderData),
        });

        if (error) {
            console.error('Error sending order confirmation:', error);
            return { success: false, error };
        }

        console.log('Order confirmation sent:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Error sending order confirmation:', error);
        return { success: false, error };
    }
}

export async function sendBookingConfirmation(to, bookingData) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'SoulMend Bookings <onboarding@resend.dev>',
            to: [to],
            subject: `Massage Booking Confirmed #${bookingData.id} 💆‍♂️`,
            html: getBookingConfirmationHTML(bookingData),
        });

        if (error) {
            console.error('Error sending booking confirmation:', error);
            return { success: false, error };
        }

        console.log('Booking confirmation sent:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Error sending booking confirmation:', error);
        return { success: false, error };
    }
}
