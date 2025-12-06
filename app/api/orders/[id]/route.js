import { supabase } from '@/lib/supabase';

// GET single order by ID
export async function GET(request, { params }) {
    try {
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .eq('id', params.id)
            .single();

        if (error) throw error;

        return Response.json({
            success: true,
            order: data
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

// PUT - Update order status
export async function PUT(request, { params }) {
    try {
        const body = await request.json();

        const { data, error } = await supabase
            .from('orders')
            .update({
                status: body.status,
                payment_status: body.paymentStatus,
                payment_id: body.paymentId
            })
            .eq('id', params.id)
            .select();

        if (error) throw error;

        return Response.json({
            success: true,
            order: data[0],
            message: 'Order updated successfully'
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
