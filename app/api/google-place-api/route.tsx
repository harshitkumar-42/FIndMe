import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
const GOOGLE_PLACE_KEY = process.env.GOOGLE_PLACE_KEY;

export async function GET(request: any) {
  const { searchParams }: any = new URL(request.url);
  const q = searchParams.get('q');
  const location = searchParams.get('location');
  const radius = searchParams.get('radius') || '10000';

  const query = q ? `query=${encodeURIComponent(q)}` : '';
  const loc = location ? `location=${location}&radius=${radius}` : '';

  const res = await fetch(
    `${BASE_URL}${query}&${loc}&key=${GOOGLE_PLACE_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const resp = await res.json();

  return NextResponse.json({
    resp,
  });
}
