import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';


export async function GET() {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*');

        if (error) throw error;

        return Response.json({
            success: true,
            message: 'Supabase connected successfully!',
            productCount: data.length,
            products: data,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
