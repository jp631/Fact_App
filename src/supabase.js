import { createClient } from "@supabase/supabase-js";

const KEY = "**********";
const supabaseUrl = "************";
const supabaseKey = KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
