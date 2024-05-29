// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtydmV2a3hpZ3NkbmlrdmFreGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5NDg3NDAsImV4cCI6MjAzMjUyNDc0MH0.48DZCuEwimr6Mtj-Y7DYPbLt4HU3G_F_sPJ-DkcIuLU';

export const supabase = createClient(supabaseUrl, supabaseKey);
