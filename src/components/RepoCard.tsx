import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';
import { IRepo } from '../types/github.response.api';

interface Props {
  repo: IRepo;
}

export function RepoCard({ repo }: Props) {
  const { addFavorite, removeFavorite } = useActions();
  const favorites = useAppSelector((state) => state.github.favorites);
  const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

  const handleAddFavorite: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    addFavorite(repo.html_url);
    setIsFav(true)
  };

  const handleRemoveFavorite: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    removeFavorite(repo.html_url);
    setIsFav(false)
  };
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>

        <p className="text-sm flex gap-2">
          Forks: <span className="font-bold">{repo.fork}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm">{repo?.description}</p>

        {!isFav && (
          <button
            onClick={handleAddFavorite}
            className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          >
            Add
          </button>
        )}

        {isFav && (
          <button
            onClick={handleRemoveFavorite}
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
}
