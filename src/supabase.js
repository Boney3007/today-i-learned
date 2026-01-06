import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ecdlydbftyeiocfbmiqc.supabase.co";
const supabaseKey =
  "sb_publishable_IcYma9U7FQLlhD5v2b-wfA_UZDE_jfR";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase ;