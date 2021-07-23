import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import LogoSVG from 'assets/logo.svg';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames';

const menu = [
  { title: 'Basics', children: [
    { title: 'Intervals', pathname: '/lessons/intervals' }
  ]},
  { title: 'Scales', children: [
    { title: 'Modes', pathname: '/lessons/modes' },
    { title: 'Major Scales', pathname: '/lessons/major_scales' }
  ]},
  { title: 'Chords', children: [
    { title: 'Triads in Major Scales', pathname: '/lessons/triads' }
  ]},
  { title: 'Quizzes', children: [
    { title: 'Notation Quiz', pathname: '/quizzes/notation' }
  ]}
];

const Header = () => {
  const router = useRouter();
  const [ activeItem, setActiveItem ] = useState(null);
  const [ activeParent, setActiveParent ] = useState(null);
  const [ burgerActive, setBurgerActive ] = useState(false);

  useEffect(() => {
    // menu blur fix
    document.activeElement?.classList?.contains("navbar-item") && document.activeElement.blur();
    let foundItem = null;
    let foundParent = null;
    for (const item of menu) {
      if (item.children) {
        foundItem = item.children.find(child => child.pathname === router.pathname);
        if (foundItem) foundParent = item;
      } else if (item.pathname === router.pathname) {
        foundItem = item;
      }
      if (foundItem) break;
    }
    setActiveItem(foundItem);
    setActiveParent(foundParent);
  }, [ router.pathname ])

  const renderItem = (item,i) => (<Link key={i} href={item.pathname}>
    <a className="navbar-item">{item.title}</a>
  </Link>);

  const renderDropdown = (item,i) => (<div key={i} className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link">{item.title}</a>
    <div className="navbar-dropdown">
      {item.children.map(renderItem)}
    </div>
  </div>);

  return (<>
    <Head>
      <title>{activeItem ? `MTE : ${activeItem.title}` : 'Music Theory Explorer'}</title>
    </Head>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item"><LogoSVG /></a>
        </Link>
        <a role="button" className={cx('navbar-burger', { 'is-active': burgerActive })} aria-label="menu" aria-expanded="false" data-target="appNavBar" onClick={() => setBurgerActive(!burgerActive)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="appNavBar" className={cx('navbar-menu', { 'is-active': burgerActive })}>
        <div className="navbar-start">
          {menu.map((item, i) => item.children ? renderDropdown(item, i) : renderItem(item, i))}
        </div>
        <div className="navbar-end">
          <a href="https://github.com/makenai/music" className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <FontAwesomeIcon icon={faGithubSquare} />
              </span>
              <span>Source</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
    {activeItem && (
      <nav className="breadcrumb header-breadcrumbs" aria-label="breadcrumbs">
      <ul>
        {activeParent && (<li className="is-active"><a href="#">{activeParent.title}</a></li>)}
        <li className="is-active"><a href="#" aria-current="page">{activeItem.title}</a></li>
      </ul>
    </nav>
    )}
  </>);
};

export default Header;