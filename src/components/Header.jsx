import './Header.css';
import headerImage from '../assets/Header.jpg';

const Header = () => (
  <header
    className="header"
    style={{ backgroundImage: `url(${headerImage})` }}
  >
    <h1>Bienvenido a Pizzería Mamma Mía</h1>
    <p>Las mejores pizzas a tu alcance</p>
  </header>
);

export default Header;
