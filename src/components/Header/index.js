import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">Lex's Portfolio</h1>
        </Link>
        <p className="m-0">Get into the mind of a programmer.</p>
      </div>
      <nav>
          <ul>
            <li>
              <Link to="about me">About Me</Link>
              <Link to="resume">resume</Link>
              <Link to="portfolio">portfolio</Link>
              <Link to="contact">contact</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
