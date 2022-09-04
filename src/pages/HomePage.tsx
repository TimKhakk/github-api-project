import { useEffect, useState } from 'react';
import { RepoCard } from '../components/RepoCard';
import { useDebounce } from '../hooks/useDebounce';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api';

const CHARS_LEN_TO_SHOW = 3;

export function HomePage() {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < CHARS_LEN_TO_SHOW,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(debounced.length > CHARS_LEN_TO_SHOW && users?.length! > 0)
  }, [debounced, users]);

  const handleClick = (userName: string) => {
    setDropdown(false);
    fetchRepos(userName);
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Something went wrong!</p>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-11 mb-2"
          placeholder="Search for GitHub username..."
          value={search}
          onClick={() => {
            if (debounced.length > CHARS_LEN_TO_SHOW && !dropdown) {
              setDropdown(true);
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
        />

        {dropdown && (
          <ul className="list-none absolute top-11 overflow-y-scroll left-0 right-0 max-h-52 shadow-md bg-white">
            {isLoading && <p className="">Loading...</p>}
            {users?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                key={user.id}
                onClick={() => handleClick(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}

        <div className="container">
          {areReposLoading && <p>Repos are loading...</p>}
          {repos?.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      </div>
    </div>
  );
}
