
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://klgquwcmcgzwhlfbwevm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZ3F1d2NtY2d6d2hsZmJ3ZXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1MjY1OTEsImV4cCI6MjA1NzEwMjU5MX0.RxqBSkSgXUSI_fW9mZXAI_6dnhudQN_PKqTYXnLr2aA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase