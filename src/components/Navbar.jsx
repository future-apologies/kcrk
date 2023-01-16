import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">KCRK home</Link>
        <Link to="/shop">KCRK shop</Link>
      </nav>
    </>
  );
};

export default Navbar;
