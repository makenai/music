import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

const tabs = [
  { title: 'Home', pathname: '/' },
  { title: 'Intervals', pathname: '/lessons/intervals' },
  { title: 'Modes', pathname: '/lessons/modes' },
  { title: 'Intro to Chords', pathname: '/lessons/intro_chords' },
  { title: 'Major Scales', pathname: '/lessons/major_scales' }
];

const Header = () => {
  return (
  <div className="header">
    <h1 className="title">Music Theory Class Experiments</h1>
    <div className="tabs">
      <ul>
        {tabs.map((tab,i) => (<li key={i} className={cx({ 'is-active': false })}>
          <Link href={tab.pathname}>{tab.title}</Link>
        </li>))}
      </ul>
    </div>
  </div>);
};

export default Header;