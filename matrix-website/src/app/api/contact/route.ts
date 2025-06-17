import { NextRequest, NextResponse } from 'next/server'

/** Handle contact form submission */
export async function POST(req: NextRequest) {
  const data = await req.json()
  console.log('Contact form:', data)
  return NextResponse.json({ success: true })
}
