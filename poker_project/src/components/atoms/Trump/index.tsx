import { FC } from 'react';

type Props = {
  image: string;
};
export const Trump: FC<Props> = ({ image }) => {
  return <img src={image} className='w-60 h-60' />;
};
