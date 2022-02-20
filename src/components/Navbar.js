const Navbar = () => {
 const style={
  color:"white",
  backgroundColor:"#f1356d",// object css //
  border:0,
 }
  return (
    <nav className="navbar" >
        <div className="logo">
        <h1>The Dojo blog</h1>    
        </div>
        <div className="item">
      <a href="/" style={style}>
        <p>Home</p>
      </a>
      <a href="/create" style={{
        color:"white",           //inline css//
        backgroundColor:"#f1356d",//Camelcasing javascript//
        border:0,
      }}>
        <p>Create</p>
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
