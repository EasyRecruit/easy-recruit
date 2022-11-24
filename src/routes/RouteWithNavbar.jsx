// Create a route with navbar resuable component

import React from 'react';
import { Route } from 'react-router-dom';
import {Navbar} from '../components';

const RouteWithNavbar = ({ element, ...rest }) => {
  return (
    <Route {...rest}>
      <Navbar />
      {element}
    </Route>
  );
}

export default RouteWithNavbar;
