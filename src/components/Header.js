import React from 'react';
import { Link, useLocation } from "react-router-dom";
import cx from 'classnames';
import './Header.scss';

const tabs = [
  { title: 'Home', pathname: '/' },
  { title: 'Scales', pathname: '/scales' }
];

const Header = () => {
  const location = useLocation();
  return (
  <div className="header">
    <h1 className="title">Music Theory Class Experiments</h1>
    <div className="tabs">
      <ul>
        {tabs.map((tab,i) => (<li key={i} className={cx({ 'is-active': tab.pathname === location.pathname })}>
          <Link to={tab.pathname}>{tab.title}</Link>
        </li>))}
      </ul>
    </div>
  </div>);
};

export default Header;