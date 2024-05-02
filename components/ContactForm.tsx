'use client';

import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@components/Button';
import { FormInput } from '@components/fields/FormInput';
import { FormTextarea } from '@components/fields/FormTextarea';

const ContactSchema = z.object({
  email: z.string().email().min(1),
  message: z.string().min(1, 'Message is required')
});

interface ContactFormData {
  email: string;
  message: string;
}

export const ContactForm: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm<ContactFormData>({
    values: {
      email: '',
      message: ''
    },
    resolver: zodResolver(ContactSchema)
  });

  const submitHandler = async (data: ContactFormData): Promise<void> => {
    setIsLoading(true);
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } finally {
      setIsLoading(false);
    }

    router.push('/email-sent');
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-full flex-col rounded-2xl border border-karry-100 border-opacity-50 bg-white bg-opacity-5 px-8 py-10 shadow-2lg md:px-16 md:py-20"
    >
      <FormInput
        control={control}
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        autoComplete="email"
      />
      <FormTextarea
        control={control}
        name="message"
        label="Message"
        placeholder="Your text here"
        wrapperClassName="mt-8"
      />
      <div className="mt-12 px-4 md:mt-16">
        <Button
          type="submit"
          text="Send"
          className="w-full"
          loading={isLoading}
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            {isLoading && <ArrowPathIcon className="size-6 animate-spin" />}
            <span>{isLoading ? 'Sending...' : 'Send'}</span>
          </div>
        </Button>
      </div>
    </form>
  );
};
