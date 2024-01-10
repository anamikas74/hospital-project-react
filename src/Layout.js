import { Outlet, Link } from "react-router-dom";
import myBanner from "./IMAGES/health.jpg";

const Layout = () => {
  return (
    <>
      <div id="wrapper">
        <div id="banner">
          <img src={myBanner} width="100%" height="350px" />
        </div>
        <div id="topmenu">
          <ul>
            <li>
              <Link to="home" className="menucolor" style={{textDecoration:"none"}} >
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="menucolor" style={{textDecoration:"none"}}>
                About
              </Link>
            </li>
            <li>
              <Link to="insert" className="menucolor" style={{textDecoration:"none"}}>
                Insert
              </Link>
            </li>
            <li>
              <Link to="display" className="menucolor" style={{textDecoration:"none"}}>
                Display
              </Link>
            </li>
            <li>
              <Link to="delete" className="menucolor" style={{textDecoration:"none"}}>
                Delete
              </Link>
            </li>
            <li>
              <Link to="update" className="menucolor" style={{textDecoration:"none"}}>
                Update
              </Link>
            </li>
            <li>
              <Link to="search" className="menucolor" style={{textDecoration:"none"}}>
                Search
              </Link>
            </li>
            <li>
              <Link to="contact" className="menucolor" style={{textDecoration:"none"}}>
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
        <div id="mydata">
          <Outlet />
        </div>

        <div id="footer">WELCOME TO ASIAN PAINTS</div>

      </div>
      
    </>
  );
};
export default Layout;
