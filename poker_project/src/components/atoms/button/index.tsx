import { FC } from 'react';

type Props = {
  onClick: () => void;
  name: string;
};
export const Button: FC<Props> = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
