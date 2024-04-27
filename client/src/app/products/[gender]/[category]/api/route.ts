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
    if (category === 'clothes') {
      console.log('category.clothes.values()', category.clothes.values());
      const { data, error } = await supabase
        .from('clothes')
        .select()
        .eq('category_1', `${capitalize(gender)}`)
        .in('category_2', `${category.clothes.values()}`)
        .limit(5);
      console.error(error);
      // console.log('data', data);
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
  console.log(result);
  return NextResponse.json({ data: result });
}
