import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://leoocgtgeuatfcclwmqh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlb29jZ3RnZXVhdGZjY2x3bXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMDEyMTAsImV4cCI6MjA2Mzg3NzIxMH0.LDGGUO1r_otMb64lf83EhrhC5voFQ0MKKmUPE33JB64';
export const supabase = createClient(supabaseUrl, supabaseKey);