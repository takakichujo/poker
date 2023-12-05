import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Result: FC<Props> = ({ children }) => {
  return (
    <div className='w-40 border-2 border-black h-20 flex justify-center items-center m-10'>
      <p className='text-2xl'>{children}</p>
    </div>
  );
};
