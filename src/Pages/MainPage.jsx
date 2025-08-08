import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import Projects from "./Projects";

const MainPage = () => {
    return (
        <div className="h-[2800px]">
            <NavBar></NavBar>
            <div className="border-[1px] border-gray-500"></div>
            <Home/>
            <div className="border-[1px] border-gray-500"></div>
            <About/>
            <div className="border-[1px] border-gray-500"></div>
            <Projects/>
            <div className="border-[1px] border-gray-500"></div>
            <Contact/>
        </div>
    )
}   

export default MainPage;