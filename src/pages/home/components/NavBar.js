import "../styles/NavBar.css";

function NavBar() {
    return(
        <div className="navbar_body">
          <div className="left_navbar_side">
            <p className="left_navbar_ptag">Home</p>
            <p className="left_navbar_ptag">Books</p>
            <p className="left_navbar_ptag">Product</p>
            <p className="left_navbar_ptag">Pricing</p>
          </div>
          <div className="right_navbar_side">
            <p className="right_navbar_ptag">
              <a href="">Log In</a>
              </p>
            <p className="right_navbar_ptag">
              <a href="">Create Account</a>
            </p>
          </div>
        </div>
    )
}


export default NavBar;