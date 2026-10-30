
import { createClient } from
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// KONFIGURASI SUPABASE
const SUPABASE_URL = 'https://kvcijzjtuuippqbqreug.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_TsEbZBPil5EmdPFA2gJv8g_vmVVK9qa';

// MEMBUAT KONEKSI
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
