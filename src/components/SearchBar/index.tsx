/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Button from './Button';

type Props = {
  handleSubmit: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
};

const SearchBar: FC<Props> = ({
  handleSubmit,
  handleType,
  handleKeyDown,
  isError,
}) => {
  return (
    <div className="flex items-center justify-between gap-x-2 rounded-2xl bg-card py-2 pl-4 pr-2 xs:gap-x-6">
      <div className="flex w-full min-w-0 gap-x-2 xs:gap-x-6">
        <label htmlFor="search" className="min-w-fit">
          <img
            src="/assets/icon-search.svg"
            alt="search"
            className="h-5 w-5 xs:h-6 xs:w-6"
          />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username…"
          className="w-full min-w-0 bg-inherit placeholder-foreground xs:text-[18px]"
          onChange={handleType}
          onKeyDown={handleKeyDown}
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
