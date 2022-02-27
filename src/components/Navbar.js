import {Link} from 'react-router-dom'
const Navbar = () => {
 const style={
  color:"white",
  backgroundColor:"#f1356d",// object css //
  border:0,
 }
  return (
    <nav className="navbar" >
        <div className="logo">
        <h1>The Blog</h1>    
        </div>
        <div className="item">
      <Link to="/" style={style}>
        <p>Home</p>
      </Link>
      <Link to="/create" style={{
        color:"white",           //inline css//
        backgroundColor:"#f1356d",//Camelcasing javascript//
        border:0,
      }}>
        <p>Create</p>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
