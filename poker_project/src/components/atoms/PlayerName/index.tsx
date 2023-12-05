import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const PlayerName: FC<Props> = ({ children }) => {
  return (
    <div className='w-50 h-50 border-solid border-black border-2 flex justify-center items-center mx-auto'>
      <p className='text-2xl'>{children}</p>
    </div>
  );
};
