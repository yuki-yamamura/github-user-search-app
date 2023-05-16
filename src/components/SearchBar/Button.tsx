import { FC } from 'react';

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ handleClick }) => (
  <button
    type="button"
    className="rounded-lg bg-primary px-4 py-3 text-white hover:bg-lightBlue focus:bg-lightBlue xs:px-6"
    onClick={handleClick}
  >
    Search
  </button>
);

export default Button;
