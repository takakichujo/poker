import { Result } from '../../atoms/Result';
import { PlayerName } from '../../atoms/PlayerName';
import { Role } from '../../atoms/Role';
import { FC } from 'react';
type Props = {
  result: string;
  playerName: string;
  role: string;
  resultClassName?: string;
  roleClassName?: string;
};
export const MoleculeEnemyRole: FC<Props> = ({
  result,
  playerName,
  role,
  resultClassName,
  roleClassName,
}) => {
  return (
    <>
      <div className={`flex mb-7  ${resultClassName}`}>
        <Result className='mt-7 mr-7'>{result}</Result>
        <PlayerName className='mt-7'>{playerName}</PlayerName>
      </div>
      <div className={roleClassName}>
        <Role>{role}</Role>
      </div>
    </>
  );
};
