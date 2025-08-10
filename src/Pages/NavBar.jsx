const NavBar = () => {
    return (
        <div className="flex justify-around min-w-full h-[70px] fixed top-0 z-50">
            <div className="bg-white w-full pl-[30px] py-[20px] flex items-center border-b-[2px]">
                <img src="/logo.png" className="w-[140px] h-[70px] pt-[10px] mt-[10px] ml-[60px] rounded-[30px]" />
            </div>
            <ul className="hidden md:flex font-poppins text-[30px] font-bold w-full bg-white flex justify-around pt-[10px] pb-[20px] border-b-[2px]">
                <li><a href="#home" className="text-[20px] hover:text-green-500">Home</a></li>
                <li><a href="#about" className="text-[20px] hover:text-green-500">About Me</a></li>
                <li><a href="#projects" className="text-[20px] hover:text-green-500">Projects</a></li>
                <li><a href="#contact" className="text-[20px] hover:text-green-500">Contact Me</a></li>
            </ul>
        </div>
    )
}

export default NavBar;