-- TEMPORARY FIX: Disable RLS for orders table
-- This allows orders to be created while we debug the issue
-- WARNING: Re-enable this in production!

ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE bookings DISABLE ROW LEVEL SECURITY;

-- Keep products accessible
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Drop existing product policies
DROP POLICY IF EXISTS "Anyone can view products" ON products;

-- Recreate product policy
CREATE POLICY "Anyone can view products" ON products
  FOR SELECT 
  TO authenticated, anon
  USING (true);

-- Grant permissions
GRANT USAGE ON SCHEMA public TO authenticated, anon;
GRANT SELECT ON products TO authenticated, anon;
GRANT ALL ON orders TO authenticated;
GRANT ALL ON bookings TO authenticated;
