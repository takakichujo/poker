import { FC, ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};
export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='w-32 bg-gray-500 hover:bg-gray-700 py-2 px-4 rounded'
    >
      {children}
    </button>
  );
};
