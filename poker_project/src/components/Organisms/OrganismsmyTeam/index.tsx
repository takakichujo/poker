import { FC } from 'react';
import { MoleculeRole } from '../../molecule/MoleculeRole';
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
};

export const OrganismsTeam: FC<Props> = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  result,
  playerName,
  role,
}) => {
  return (
    <>
      <MoleculeRole result={result} playerName={playerName} role={role} />
      <MoleculeTrumps
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
      />
    </>
  );
};
