'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@utils/cn';
import { Button, buttonVariants } from '../components/ui/button';
import { Icons } from '../components/icons';
import { providerMap } from 'auth';
import { AuthError } from 'next-auth';
import { redirect, useRouter } from 'next/navigation';
import { serverSignIn } from '@utils/serverActions/auth';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<string>('');
  const router = useRouter();

  const handleClick = async (id: string, name: string) => {
    setIsLoading(id);
    try {
      await serverSignIn(name);
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`/login`);
      }
      throw error;
    }

    setTimeout(() => {
      setIsLoading('');
    }, 3000);
  };

  return (
    <section className="container relative h-svh p-8 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2">
      <div
        onClick={() => router.back()}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8 cursor-pointer'
        )}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign in with your account</h1>
          </div>
          <div className={cn('grid gap-6')}>
            {Object.values(providerMap).map((provider) => {
              const lowerName = provider.name.toLowerCase();
              const ProviderIcon = Icons[lowerName];
              return (
                <Button
                  onClick={() => {
                    handleClick(provider.id, provider.name);
                  }}
                  type="submit"
                  className={cn('w-full text-lg')}
                  variant="outline"
                  disabled={isLoading !== ''}
                  key={provider.id}
                >
                  {isLoading === provider.id ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <ProviderIcon className="mr-2 h-4 w-4" />
                  )}{' '}
                  {provider.name}
                </Button>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
