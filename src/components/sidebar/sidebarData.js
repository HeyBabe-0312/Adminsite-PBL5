import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {CgLogOut} from 'react-icons/cg';
import {GiTheater,GiFilmProjector} from 'react-icons/gi'
import {FaUserAstronaut} from 'react-icons/fa'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome  />,
    cName: 'nav-text'
  },
  {
    title: 'Theater',
    path: '/qlirap',
    icon: <GiFilmProjector />,
    cName: 'nav-text'
  },
  {
    title: 'Film',
    path: '/qliphim',
    icon: <GiTheater />,
    cName: 'nav-text'
  },
  {
    title: 'Actor',
    path: '/qlidv',
    icon: <FaUserAstronaut />,
    cName: 'nav-text'
  },
  {
    title: 'User',
    path: '/qliuser',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Log out',
    path: '/',
    icon: <CgLogOut />,
    cName: 'nav-text'
  }
];
