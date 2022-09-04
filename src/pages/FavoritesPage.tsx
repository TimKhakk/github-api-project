import { useAppSelector } from '../hooks/useAppSelector';

export function FavoritesPage() {
  const favorites = useAppSelector((state) => state.github.favorites);
  if (favorites.length === 0) {
    return (
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        <p>No items.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen text-blue-500">
      <ul className="list-none">
        {favorites.map((f) => (
          <li className="hover:underline" key={f}>
            <a target="_blank" href={f}>
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
