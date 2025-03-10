import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://thhnhpgvnoiiydbkgqli.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoaG5ocGd2bm9paXlkYmtncWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NDQwMDAsImV4cCI6MjA1NTAyMDAwMH0.r2CEA1D2AqtQo061jEgGvAhRn3U4kkmRknoTOID996Y";

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
//  = createClient(supabaseUrl, supabaseKey);
