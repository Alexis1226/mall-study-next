import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@utils/database.types';

export type TypedSupabaseClient = SupabaseClient<Database>;

export type productType = {
  id: number;
  name: string;
  price: string;
  size: string[];
  colors: string[];
  texture: string[];
  thumbnail_url: string[];
  img_url: string[];
  created_at: string;
  updated_at: string;
  category_1: string;
  category_2: string;
};

export type objectType = { [key: string]: string };
