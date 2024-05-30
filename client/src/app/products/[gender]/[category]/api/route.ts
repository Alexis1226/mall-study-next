import { changeToDBCategory } from '@src/constants/category';
import { capitalize } from '@utils/capitalize';
import { createClient } from '@utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { gender: string; category: string } }
) {
  const { gender, category } = params;

  async function getData() {
    const supabase = createClient();
    if (category === 'new-arrivals') {
      const { data, error } = await supabase
        .from('clothes')
        .select()
        .order('created_at', { ascending: false })
        .eq('category_1', `${capitalize(gender)}`)
        .limit(5);

      if (error) console.error('Error fetching data:', error);
      else {
        return data;
      }
    } else if (category === 'view-all') {
      const { data, error } = await supabase
        .from('clothes')
        .select()
        .eq('category_1', `${capitalize(gender)}`)
        .limit(5);

      if (error) console.error('Error fetching data:', error);
      else {
        return data;
      }
    } else if (category === 'clothes') {
      const { data, error } = await supabase
        .from('clothes')
        .select()
        .eq('category_1', `${capitalize(gender)}`)
        .in('category_2', `${changeToDBCategory(category) as string[]}`)
        .limit(5);

      return data;
    } else {
      const { data, error } = await supabase
        .from('clothes')
        .select()
        .eq('category_1', `${capitalize(gender)}`)
        .eq('category_2', `${changeToDBCategory(category)}`)
        .limit(5);
      console.error(error);
      return data;
    }
  }
  const result = await getData();

  return NextResponse.json({ data: result });
}
