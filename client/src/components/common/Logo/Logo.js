import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.scss';

const Logo = ({ links, location }) => (
  <Link to='/'>
    <h1 className="logo">Blog.app</h1>
  </Link>
);

export default Logo;
