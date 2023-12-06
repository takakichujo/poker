import { FC } from 'react';
import { Trump } from '../../atoms/Trump';

type Props = {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  className?: string;
};

export const MoleculeTrumps: FC<Props> = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  className,
}) => {
  return (
    <div className={`flex mt-7 mb-7 ${className}`}>
      <Trump image={image1} className='mr-20' />
      <Trump image={image2} className='mr-20' />
      <Trump image={image3} className='mr-20' />
      <Trump image={image4} className='mr-20' />
      <Trump image={image5} className='mr-20' />
    </div>
  );
};
