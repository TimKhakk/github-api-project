import { Routes, Route, Link } from "react-router-dom";
interface Props {
  Navigation?: any;
}


export function Navigation(props: Props) {
  return (
    <div className="flex justify-between items-center h-12 px-5 shadow-md bg-gray-500 text-white">
      <h3>GitHub Search</h3>

      <span>
        <Link to="/" >Home</Link>
        <Link to="/favorites" >Favorites</Link>
      </span>
    </div>
  );
}
