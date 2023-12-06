import { FC, ReactNode } from 'react';
import { OrganismsMyTeam } from '../../Organisms/OrganismsmyTeam';
import { Button } from '../../atoms/Button';
import { OrganismsEnemyTeam } from '../../Organisms/OrganismEnemyTeam';
type Props = {
  myResult: string;
  myPlayerName: string;
  myRole: string;
  myImage1: string;
  myImage2: string;
  myImage3: string;
  myImage4: string;
  myImage5: string;
  enemyResult: string;
  enemyPlayerName: string;
  enemyRole: string;
  enemyImage1: string;
  enemyImage2: string;
  enemyImage3: string;
  enemyImage4: string;
  enemyImage5: string;
  onClick: () => void;
  children: ReactNode;
};

export const TemplatesField: FC<Props> = ({
  myResult,
  myPlayerName,
  myRole,
  myImage1,
  myImage2,
  myImage3,
  myImage4,
  myImage5,
  enemyResult,
  enemyPlayerName,
  enemyRole,
  enemyImage1,
  enemyImage2,
  enemyImage3,
  enemyImage4,
  enemyImage5,
  onClick,
  children,
}) => {
  return (
    <div className='w-70 ml-10'>
      <OrganismsMyTeam
        result={myResult}
        playerName={myPlayerName}
        role={myRole}
        image1={myImage1}
        image2={myImage2}
        image3={myImage3}
        image4={myImage4}
        image5={myImage5}
      />
      <div className='flex justify-center'>
        <Button onClick={onClick} children={children} />
      </div>
      <OrganismsEnemyTeam
        result={enemyResult}
        playerName={enemyPlayerName}
        role={enemyRole}
        image1={enemyImage1}
        image2={enemyImage2}
        image3={enemyImage3}
        image4={enemyImage4}
        image5={enemyImage5}
        className='justify-end '
      />
    </div>
  );
};
