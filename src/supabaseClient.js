import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fhgswkjhaszmhirguexe.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZ3N3a2poYXN6bWhpcmd1ZXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NjU3MjgsImV4cCI6MjA1NTQ0MTcyOH0.slplrWOYwCkghItT74o2t5LN-H46lXSFWAtEde1dTG4";

export const supabase = createClient(supabaseUrl, supabaseKey);
