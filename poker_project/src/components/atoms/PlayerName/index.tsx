import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};
export const PlayerName: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`w-50 h-16 border-solid border-black border-2 flex justify-center items-center ${className}`}
    >
      <p className='text-2xl'>{children}</p>
    </div>
  );
};
