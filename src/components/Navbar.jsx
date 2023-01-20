import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/shop">KCRK shop</Link>
        <Link to="/">KCRK</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </>
  );
};

export default Navbar;
