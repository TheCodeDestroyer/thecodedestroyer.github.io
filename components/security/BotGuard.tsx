'use client';

import type { FC, PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import Turnstile, { useTurnstile } from 'react-turnstile';

import { Button } from '@components/Button';

const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY as string;

enum TurnstileState {
  Initial,
  Verified,
  Failed
}

export const BotGuard: FC<PropsWithChildren> = ({ children }) => {
  const [turnstileState, setTurnstileState] = useState<TurnstileState>(
    TurnstileState.Initial
  );
  const turnstile = useTurnstile();

  return (
    <Fragment>
      {turnstileState !== TurnstileState.Verified && (
        <Turnstile
          sitekey={siteKey}
          fixedSize
          onVerify={(token) => {
            fetch('/api/verify', {
              method: 'POST',
              body: JSON.stringify({ token })
            }).then((response) => {
              if (response.ok) {
                setTurnstileState(TurnstileState.Verified);
              } else {
                setTurnstileState(TurnstileState.Failed);
              }
            });
          }}
        />
      )}
      {turnstileState === TurnstileState.Verified && children}
      {turnstileState === TurnstileState.Failed && (
        <Button
          text="Retry verfification"
          onClick={(): void => {
            turnstile.reset();
          }}
        />
      )}
    </Fragment>
  );
};
