
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Company, Pricing, Resources, FourZeroFour, Platform , Login, Signup, Dashboard } from "../pages";

const PagesRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Not Logged In Routes  */}
          <Route exact path="/" element={<Home/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/platform" element={<Platform/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

          {/* Logged In Routes  */}
          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="*" element={<FourZeroFour/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default PagesRoute;
