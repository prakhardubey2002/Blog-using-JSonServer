const Navbar = () => {
    
  return (
    <nav className="navbar" >
        <div className="logo">
        <h1>The Dojo blog</h1>    
        </div>
        <div className="item">
      <a href="/">
        <p>Home</p>
      </a>
      <a href="/create">
        <p>Create</p>
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
