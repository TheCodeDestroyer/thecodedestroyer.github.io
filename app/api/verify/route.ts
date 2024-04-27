import { NextResponse } from 'next/server';

const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY as string;

interface Payload {
  'cf-turnstile-response': string;
}

export async function POST(req: Request): Promise<NextResponse> {
  const body = (await req.json()) as Payload;

  const token: string = body['cf-turnstile-response'] as string;
  const ip: string = req.headers.get('x-forwarded-for') as string;

  const form = new URLSearchParams();

  form.append('secret', secretKey);
  form.append('response', token);
  form.append('remoteip', ip);

  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body: form }
  );
  const result = (await response.json()) as { success: boolean };

  return NextResponse.json(result, { status: response.status });
}
