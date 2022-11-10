import { Navbar } from "../../components";
import "./Home.css";
import { banner } from "../../assets";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="banner">
          <img src={banner} alt="banner" className="banner-image" />
        </div>
        <div className="banner-text">
          <h1 className="banner-heading">Expand your recruitments network</h1>
          <p className="banner-para">
            Gather connections and expand your social activity 
            between recruitments
          </p>
          <div className="banner-btn">
            <button className="btn btn-primary">Request a demo</button>
            <a href="#">  Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
