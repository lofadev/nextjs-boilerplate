import React, { ComponentProps, FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const PageWrapper: FC<ComponentProps<'div'> & PropsWithChildren> = ({ children, className, ...props }) => {
  return (
    <div className={cn('container mx-auto px-4', className)} {...props}>
      {children}
    </div>
  );
};

export default PageWrapper;
