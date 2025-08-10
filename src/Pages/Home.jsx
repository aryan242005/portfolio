import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
    return (
        <div id="home" className="pt-[10px] min-h-[550px] mt-[60px] px-[30px]">
            <div className="font-poppins flex-col md:flex-row flex min-w-full mx-auto">
                {/* Left Panel */}
                <div className="flex-1 flex flex-col items-center justify-center gap-12">
                    <div>
                        <h1 className="text-[40px] sm:text-[60px] font-semibold text-center sm:text-left">Hi, I'm Aryan Patil</h1>
                        <h1 className="text-[20px] sm:text-[30px] font-semibold text-center sm:text-left text-green-500">I'm a Java Full Stack Developer</h1>
                    </div>
                    <div className="flex pl-[0px] gap-7 sm:gap-20 pt-[0px]">
                        <a href="https://github.com/aryan242005" target="_blank" className="cursor-pointer"><FaGithub className="hover:text-green-500 duration-500" size={50}/></a>
                        <a href="https://www.linkedin.com/in/aryan-patil-6b248a325/" target="_blank" className="cursor-pointer"><FaLinkedin className="hover:text-green-500 duration-500" size={50}/></a>
                        <a href="https://x.com/AryanPatil243a" target="_blank" className="cursor-pointer"><FaTwitter className="hover:text-green-500 duration-500" size={50}/></a>
                        <a href="https://www.instagram.com/aryan_patil243/?__pwa=1" target="_blank" className="cursor-pointer"><FaInstagram className="hover:text-green-500 duration-500" size={50}/></a>
                    </div>
                    <div className="bg-green-500 hover:bg-white rounded-[10px] transition-all">
                        <a href="/Aryan Patil Resume.pdf" download>
                        <button className="rounded-[10px] py-[20px] px-[10px] border-black border-[1px] text-white hover:text-green-600">Download Resume</button></a>
                    </div>
                </div>
                {/* Right Panel */}
                <div className="flex-1 flex items-center justify-center mt-[60px]">
                    <div className="bg-green-500 border-black border-[4px] p-[60px] rounded-[280px]">
                        <div className="bg-white rounded-[200px] border-black border-[4px]">
                            <img src="/IMG_9853.jpg" className="w-[150px] h-[150px] sm:min-w-[200px] sm:min-h-[200px] md:min-w-[300px] md:min-h-[300px] xl:min-w-[400px] xl:min-h-[400px] object-cover mx-auto rounded-[200px] object-top"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-gray-500 mt-[70px] mb-[70px]"></div>
        </div>
    )
}

export default Home;