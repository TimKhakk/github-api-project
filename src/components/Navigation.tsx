import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div className="flex justify-between items-center h-12 px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">GitHub Search</h3>

      <span className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </div>
  );
}
