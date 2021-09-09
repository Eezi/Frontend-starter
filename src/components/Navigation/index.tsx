import React, { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom';

const Header: FC<{}> = (): ReactElement => {
    return (
<header className=" flex flex-row justify-between items-center space-x-4 bg-black py-6 px-6">
  <Link to="/" className="block">
    <h5 className="text-green-300 text-xl font-mono"></h5>
  </Link>
  <nav className="flex flex-row space-x-6 font-semibold">
    <Link to="/settings" className="text-green-300 hover:underline font-mono"></Link>
    <Link to="/transaction" className="text-green-300 hover:underline font-mono"></Link>
  </nav>
</header>
);
}

export default Header