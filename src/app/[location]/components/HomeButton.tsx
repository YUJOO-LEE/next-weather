'use client'

import { Button } from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

export const HomeButton = (): React.ReactNode => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <Button onClick={handleClick}>
      Home
    </Button>
  );
};