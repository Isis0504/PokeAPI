import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ssumghwiahmowdgwxnki.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzdW1naHdpYWhtb3dkZ3d4bmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NDc2NTgsImV4cCI6MjA2MzAyMzY1OH0.dxOL43_h4NXT1u0XfAAUP3HMN9CJ_uqqPp1gr43WStk';
export const supabase = createClient(supabaseUrl, supabaseKey);