import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Role: FC<Props> = ({ children }) => {
  return (
    <div className='border-2 border-solid border-black w-full  h-10  flex justify-center items-center'>
      <p className='text-3xl'>{children}</p>
    </div>
  );
};
