import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';


// GET all bookings
export async function GET() {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('booking_date', { ascending: true });

        if (error) throw error;

        return Response.json({
            success: true,
            bookings: data
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

// POST - Create new booking
export async function POST(request) {
    try {
        const body = await request.json();

        // Generate booking number
        const bookingNumber = 'BK' + Date.now().toString().slice(-8);

        const { data, error } = await supabase
            .from('bookings')
            .insert([{
                booking_number: bookingNumber,
                service: body.service,
                location: body.location,
                booking_date: body.date,
                booking_time: body.time,
                customer_name: body.name,
                customer_phone: body.phone,
                customer_email: body.email,
                status: 'confirmed'
            }])
            .select();

        if (error) throw error;

        return Response.json({
            success: true,
            booking: data[0],
            message: 'Booking created successfully'
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
