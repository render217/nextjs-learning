import { NextResponse } from 'next/server';

export async function GET() {
  return Response.json({ status: 200, message: 'ok' });
}
