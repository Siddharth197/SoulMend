import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    try {
        const { id } = params;

        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        if (!data) {
            return Response.json({
                success: false,
                error: 'Product not found'
            }, { status: 404 });
        }

        return Response.json({
            success: true,
            product: data
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
