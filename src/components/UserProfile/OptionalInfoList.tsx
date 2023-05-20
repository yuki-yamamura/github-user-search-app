import { FC } from 'react';
import { User } from '@/types/User';
import OptionalInfo from './OptionalInfo';

export const infoList = ['location', 'blog', 'twitter', 'company'] as const;

type Props = {
  user: User;
};

const OptionalInfoList: FC<Props> = ({ user }) => (
  <ul className="grid gap-y-4 xs:grid-flow-col xs:grid-cols-2 xs:grid-rows-2 xs:gap-4">
    {infoList.map((info) => (
      <OptionalInfo user={user} info={info} key={info} />
    ))}
  </ul>
);

export default OptionalInfoList;
