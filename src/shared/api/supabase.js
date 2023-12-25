import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xbgqczneouqhpkzulcqj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZ3Fjem5lb3VxaHBrenVsY3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjkxMzQsImV4cCI6MjAxODUwNTEzNH0.EsCvBmcy66Ce8YqZz2A6nGDI5gEAp6QqLPwxtW0izoE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
