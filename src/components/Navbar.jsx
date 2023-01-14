import React from 'react';

const Navbar = () => {
  return (
      <>
        <nav className="navbar">
            <h1>navigation station.</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>New Blog</Link>
             </div>
        </nav>
      </>
  );
};

export default Navbar;