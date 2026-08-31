import { NextResponse } from 'next/server';

import { llmsDocument } from '@shared/profile/llmsDocument';

// The content is fully static, so prerender at build time (like robots/sitemap)
// instead of rendering on every request.
export const dynamic = 'force-static';

export const GET = () =>
  new NextResponse(llmsDocument, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
