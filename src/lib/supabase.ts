import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jrhlvcqbnivisdmtpmbd.supabase.co';
const supabaseAnonKey = 'sb_publishable_FQGV1dpNP6V64M3QH-_-Tg_Fcs_BwD0'
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});


