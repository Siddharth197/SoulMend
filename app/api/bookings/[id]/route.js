import { supabase } from '@/lib/supabase';

// GET single booking by ID
export async function GET(request, { params }) {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .eq('id', params.id)
            .single();

        if (error) throw error;

        return Response.json({
            success: true,
            booking: data
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

// PUT - Update booking status
export async function PUT(request, { params }) {
    try {
        const body = await request.json();

        const updateData = {
            status: body.status
        };

        // If rescheduling, update date and time
        if (body.date) updateData.booking_date = body.date;
        if (body.time) updateData.booking_time = body.time;

        const { data, error } = await supabase
            .from('bookings')
            .update(updateData)
            .eq('id', params.id)
            .select();

        if (error) throw error;

        return Response.json({
            success: true,
            booking: data[0],
            message: 'Booking updated successfully'
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

// DELETE booking
export async function DELETE(request, { params }) {
    try {
        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', params.id);

        if (error) throw error;

        return Response.json({
            success: true,
            message: 'Booking cancelled successfully'
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
