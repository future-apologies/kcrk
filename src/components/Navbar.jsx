import { Link } from "react-router-dom";
import '../index.css'

const Navbar = () => {
  return (
      <>
        <nav className="navbar">
            <h1>KCRK</h1>
            <div className="links">
                <Link to="/">new rat city.</Link>
                <Link to="/shop" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>Shop</Link>
             </div>
        </nav>
      </>
  );
};

export default Navbar;