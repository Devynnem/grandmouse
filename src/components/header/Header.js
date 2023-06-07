import "./Header.css";
import logo from '../../assets/Mickey-Mouse-Ears-Clip-Art-N34.png'

const Header = () => {
  return (
    <header className="header-container">
      {/* <Link to="/"> */}
        <img src={logo} id="header-logo" alt="GrandMouse logo" />  
        <h1>GrandMouse</h1>
      {/* </Link> */}
      {/* <h1 className="slogan">Elevate your beauty game with Glam Squad!</h1> */}
    </header>
  );
};

export default Header;