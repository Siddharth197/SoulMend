import { supabase } from '@/lib/supabase';
import { sendOrderConfirmation } from '@/lib/email';

export const dynamic = 'force-dynamic';


// GET all orders
export async function GET() {
    try {
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return Response.json({
            success: true,
            orders: data
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

// POST - Create new order
export async function POST(request) {
    try {
        const body = await request.json();

        // Generate order number
        const orderNumber = 'ORD' + Date.now().toString().slice(-8);

        const { data, error } = await supabase
            .from('orders')
            .insert([{
                order_number: orderNumber,
                items: body.items,
                shipping_address: body.shippingAddress,
                total_amount: parseFloat(body.totalAmount),
                user_id: body.userId || null,  // Add user ID
                status: 'pending',
                payment_status: 'pending'
            }])
            .select();

        if (error) throw error;

        // Send order confirmation email (async, don't wait)
        if (body.customerEmail && data[0]) {
            const orderData = {
                id: data[0].order_number,
                items: body.items,
                total: body.totalAmount,
                address: body.shippingAddress.address,
                city: body.shippingAddress.city,
                state: body.shippingAddress.state,
                pincode: body.shippingAddress.pincode
            };

            sendOrderConfirmation(body.customerEmail, orderData).catch(err =>
                console.error('Failed to send order confirmation email:', err)
            );
        }

        return Response.json({
            success: true,
            order: data[0],
            message: 'Order created successfully'
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
