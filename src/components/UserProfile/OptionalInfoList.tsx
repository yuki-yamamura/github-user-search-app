import { FC } from 'react';
import { User } from '@/types/User';
import OptionalInfo from './OptionalInfo';

export const infoList = ['location', 'blog', 'twitter', 'company'] as const;

type Props = {
  user: User;
};

const OptionalInfoList: FC<Props> = ({ user }) => (
  <ul className="flex flex-col justify-start gap-y-4">
    {infoList.map((info) => (
      <OptionalInfo user={user} info={info} key={info} />
    ))}
  </ul>
);

export default OptionalInfoList;
