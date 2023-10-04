import logo from "../assets/images/logo.png";
import darkLogo from "../assets/images/logoDark.png";

const Logo = () => {
  const isDarkTheme = document.body.className === 'dark-theme';
  return <img src={isDarkTheme ? darkLogo : logo} alt="Jobhine" className="logo" style={{height: '50px', width: '164px'}} />;
};
export default Logo;
