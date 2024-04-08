import * as React from 'react';

import { cn } from '@utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder="제품 검색"
        className={cn(
          'flex h-8 w-full border-b border-input border-foreground bg-background pl-9 pr-4 py-2 text-xs ring-offset-background font-light placeholder:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
