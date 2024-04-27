import type { FC } from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: FC<EmailTemplateProps> = ({ email, message }) => (
  <div>
    <h1>CV Contact Form submission</h1>
    <p>From: {email}</p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
