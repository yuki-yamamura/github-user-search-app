import { FC } from 'react';

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ handleClick }) => (
  <button
    type="button"
    className="rounded-lg bg-blue px-4 py-3 text-white"
    onClick={handleClick}
  >
    Search
  </button>
);

export default Button;
