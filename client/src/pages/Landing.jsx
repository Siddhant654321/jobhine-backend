import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          Discover a hub where recruiters unveil promising positions to a network of dedicated professionals. Post, connect, and hire—the gateway to your organization's next chapter begins here.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>

          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
