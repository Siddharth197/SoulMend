import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Check URI inside dbConnect or when used, to avoid build-time error
if (!MONGODB_URI && process.env.NODE_ENV !== 'production') {
    // In dev we might want to warn, but for build we should ideally not crash unless used
    console.warn('MONGODB_URI not defined in .env.local');
}



/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
