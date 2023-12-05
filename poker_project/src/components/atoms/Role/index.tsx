import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Role: FC<Props> = ({ children }) => {
  return (
    <div className='border-2 border-solid border-black w-20  h-20 text-center flex justify-center items-center mx-auto'>
      <p className='text-16'>{children}</p>
    </div>
  );
};
