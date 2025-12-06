import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';


// GET all products
export async function GET() {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return Response.json({
            success: true,
            products: data
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

// POST - Create new product
export async function POST(request) {
    try {
        const body = await request.json();

        const { data, error } = await supabase
            .from('products')
            .insert([{
                name: body.name,
                price: parseFloat(body.price),
                image: body.image,
                description: body.description || '',
                long_description: body.longDescription || '',
                ingredients: body.ingredients || [],
                benefits: body.benefits || [],
                category: body.category || 'balm',
                stock: parseInt(body.stock) || 0
            }])
            .select();

        if (error) throw error;

        return Response.json({
            success: true,
            product: data[0],
            message: 'Product created successfully'
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
