'use client';

import { Button } from '@/app/components/Button';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error(props: Props) {
  const { error, reset } = props;

  console.error('###', error.message);

  return (
    <div>
      <h1 className="header">
        에러 발생
      </h1>
      <p>
        {error.message}
      </p>
      <Button onClick={reset}>
        retry
      </Button>
    </div>
  );
}