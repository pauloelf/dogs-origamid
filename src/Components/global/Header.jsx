import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/dogs.svg';
import { ReactComponent as User } from '../../assets/svgs/usuario.svg';

const Header = () => {
  return (
    <header className="fixed top-0 py-3 h-16 w-full z-10 bg-white shadow shadow-gray-100">
      <nav className="max-w-3xl mx-auto flex justify-between items-center">
        <Link className="py-2" to="/" aria-label="Dogs - Home">
          <Logo />
        </Link>
        <Link className="flex items-center text-gray-700" to="/login">
          Entrar / Criar <User className="ml-2" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
