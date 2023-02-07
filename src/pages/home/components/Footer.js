import "../styles/Footer.css";



function Footer (){
    return(
        <div className="footer_main">
            <div className="footer_left_ptag">
                <h3 className="footer_ptag">ABOUT COMPANY</h3>
                <p className="footer_ptag_two">
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Enquiry</p>
                    <p>Support</p>
                </p>
            </div>
            <div className="footer_mid_ptag">
                <h3 className="footer_ptag">SOLUTION FOR EDUCATION</h3>
                <p className="footer_ptag_two">
                    <p>Online Curses And Exams</p>
                    <p>Digital Language Lab</p>
                    <p>Digital School</p>
                    <p>Digital Lecture Studio</p>
                    <a href="https://semicolon.africa" target="blank" color="whitesmoke">Semicolon Africa Software</a>

                </p>
            </div>
            <div className="footer_right_ptag">
                <h3 className="footer_ptag">CONTACT</h3>
                <p className="footer_ptag_two">312, Herbert Macualay Way, Sabo Yaba, Lagos.</p>
                <p className="footer_ptag_two">(+234)9077121403</p>
            </div>
        </div>

    )
}

export default Footer;