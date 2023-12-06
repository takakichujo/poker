import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Result: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`w-40 border-2 border-black h-16 flex justify-center items-center ${className}`}
    >
      <p className='text-2xl'>{children}</p>
    </div>
  );
};
