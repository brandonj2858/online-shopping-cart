import React from 'react';
import {NavLink} from 'react-router-dom';

import Router from '../Router'

export default function Navigation() {
  return(<ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>)
}
