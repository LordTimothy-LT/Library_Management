import "../styles/Home.css";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import NavBar from "./NavBar";
import Footer from "./Footer";


function Home(){
    return(
        <div className="home_page">
            <TopNav/>
            <NavBar/>
            <Hero/>
            <Footer/>
        </div>
    )
}

export default Home;
