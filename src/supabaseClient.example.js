import { createClient } from "@supabase/supabase-js";

const supabaseUrl = your_supabase_url_here
const supabaseKey = your_supabase_key_here

export const supabase = createClient(supabaseUrl, supabaseKey);

