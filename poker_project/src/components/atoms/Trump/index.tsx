import { FC } from 'react';

type Props = {
  image: string;
  className?: string;
};
export const Trump: FC<Props> = ({ image, className }) => {
  return <img src={image} className={`w-60 h-60 ${className}`} />;
};
