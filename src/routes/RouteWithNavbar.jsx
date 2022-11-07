import { Route } from "react-router-dom";
import {Navbar, Footer} from '../components'


const RouteWithNavbar = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Navbar />
      <Component extra={rest} />
      <Footer/>
    </Route>
  );
};

export default RouteWithNavbar;
