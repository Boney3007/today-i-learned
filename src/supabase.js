import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kskogprjprkpqzjysgso.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtza29ncHJqcHJrcHF6anlzZ3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4NzQ0MDksImV4cCI6MTk5ODQ1MDQwOX0.9pK2tVs0F5jWRa435EHRgYIXDLP2Cm6Rn5huQ3lncdI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase ;