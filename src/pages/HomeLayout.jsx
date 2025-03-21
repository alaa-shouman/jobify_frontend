import React from 'react'
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      {/* add things like Navbar */}
      {/* <h1>home layout</h1> */}
      <Outlet />
    </>
  );
}

export default HomeLayout