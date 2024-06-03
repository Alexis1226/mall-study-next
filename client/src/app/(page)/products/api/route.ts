import { createClient } from '@utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  async function getData() {
    const supabase = createClient();
    try {
      const { data } = await supabase.from('clothes').select().limit(5);

      return data;
    } catch (error) {
      console.error('error : ', error);
    }
  }
  const result = await getData();

  return NextResponse.json({ data: result });
}
