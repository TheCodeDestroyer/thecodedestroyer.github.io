import { NextResponse } from 'next/server';
import type { ReactElement } from 'react';
import { Resend } from 'resend';

import { EmailTemplate } from '@components/EmailTemplate';

interface Payload {
  email: string;
  message: string;
}

const from = process.env.FROM_EMAIL as string;
const to = process.env.TO_EMAIL as string;
const resendApiKey = process.env.RESEND_API_KEY as string;

const resend = new Resend(resendApiKey);

export async function POST(req: Request): Promise<NextResponse> {
  const { email, message } = (await req.json()) as Payload;

  await resend.emails.send({
    from,
    to,
    subject: `JOB from CV - ${email}`,
    react: EmailTemplate({ email, message }) as ReactElement
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
