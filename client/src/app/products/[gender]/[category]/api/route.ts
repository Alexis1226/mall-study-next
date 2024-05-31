import { capitalize, changeToDBCategory } from '@utils/function';
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
    } else if (category === 'clothes' || category === 'shoes-accessories') {
      const searchingArray = changeToDBCategory(category) as readonly string[];

      const { data, error } = await supabase
        .from('clothes')
        .select()
        .eq('category_1', `${capitalize(gender)}`)
        .in('category_2', searchingArray)
        .limit(5);

      if (error) console.error('Error fetching data:', error);
      else {
        return data;
      }
    } else {
      const { data, error } = await supabase
        .from('clothes')
        .select()
        .eq('category_1', `${capitalize(gender)}`)
        .eq('category_2', `${changeToDBCategory(category)}`)
        .limit(5);

      if (error) console.error('Error fetching data:', error);
      else {
        return data;
      }
    }
  }
  const result = await getData();

  return NextResponse.json({ data: result });
}
