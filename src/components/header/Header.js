import "./Header.css";
import { Link } from 'react-router-dom'
import logo from '../../assets/Mickey-Mouse-Ears-Clip-Art-N34.png'

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src={logo} id="header-logo" alt="GrandMouse logo" />  
      </Link>
        <h1>GrandMouse</h1>
      <Link to="/favorites">
        <button className="fav-btn ">Favorites</button>
      </Link>
      <p className="slogan">Welcome new and existing grandparents to a place to keep up with the grandkids favorite character!</p>
    </header>
  );
};

export default Header;