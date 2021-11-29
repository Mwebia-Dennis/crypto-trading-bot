
import React from 'react'
import AppBar from '../../components/AppBar'
import {
  Outlet,
} from 'react-router-dom';

export default function MainTheme() {
    return (
      <div>
        <AppBar />
        <Outlet />
      </div>
    );
  }