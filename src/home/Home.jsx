
import "./home.scss";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="logo"/>
    </div>
  )
}

export default Home
