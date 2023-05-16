import { FC } from 'react';
import SearchIcon from '../icons/SearchIcon';
import Button from './Button';

type Props = {
  handleSubmit: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void;

  handleType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
};

const SearchBar: FC<Props> = ({ handleSubmit, handleType, isError }) => {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-x-2 rounded-2xl bg-card py-2 pl-4 pr-2 xs:gap-x-6 xs:pl-8">
      <div className="flex w-full min-w-0 gap-x-2 xs:gap-x-6">
        <label htmlFor="search" className="min-w-fit cursor-pointer">
          <SearchIcon />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username…"
          className="w-full min-w-0 bg-inherit placeholder-foreground outline-none xs:text-[18px]"
          onChange={handleType}
          onKeyDown={handleSubmit}
        />
        {isError && (
          <div
            role="alert"
            className="min-w-fit whitespace-nowrap text-red xs:text-[15px]"
          >
            No results
          </div>
        )}
      </div>
      <Button handleClick={handleSubmit} />
    </div>
  );
};

export default SearchBar;
