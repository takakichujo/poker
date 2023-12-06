import { FC } from 'react';
import { MoleculeMyRole } from '../../molecule/MoleculeMyRole';
import { MoleculeTrumps } from '../../molecule/MoleculeTrumps';

type Props = {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  result: string;
  playerName: string;
  role: string;
  className?: string;
};

export const OrganismsEnemyTeam: FC<Props> = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  result,
  playerName,
  role,
  className,
}) => {
  return (
    <>
      <MoleculeTrumps
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
      />
      <MoleculeMyRole
        result={result}
        playerName={playerName}
        role={role}
        resultClassName={className}
      />
    </>
  );
};
