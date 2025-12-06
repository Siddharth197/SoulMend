import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export const dynamic = 'force-dynamic';


export async function GET() {
    try {
        await dbConnect();
        const products = await Product.find({});

        return Response.json({
            success: true,
            message: 'Database connected successfully!',
            productCount: products.length,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
