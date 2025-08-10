import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div id="projects" className="font-poppins px-[30px] xl:pt-[60px]">
            <h1 className="text-[40px] font-bold text-center mb-[50px]">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 min-w-full mx-auto place-items-center items-stretch">
                <div onClick={() => navigate("/devconnect")} className="bg-white min-w-full flex flex-col xl:flex-row justify-center items-center border-[1px] border-black rounded-[10px]">
                    <div className="flex-1 h-full">
                        <img src="/project 1/ss5.png" className="w-full h-full object-cover rounded-[10px]" />
                    </div>
                    <div className="flex-1 px-[30px] py-[30px]">
                        <h1 className="text-green-500 text-[25px] font-bold">DevConnect</h1>
                        <p className="text-justify">A full-stack social platform for developers to connect, share posts, follow others, and interact in real time. Built with Spring Boot and React, DevConnect brings the developer community together through clean UI, smart features, and a scalable backend.</p>
                    </div>
                </div>
                <div onClick={() => navigate("/myblog")} className="bg-white min-w-full flex flex-col xl:flex-row justify-center items-center border-[1px] border-black rounded-[10px]">
                    <div className="h-full flex-1">
                        <img src="/project 2/ss7.png" className="w-full h-full object-cover rounded-[10px]" />
                    </div>
                    <div className="flex-1 px-[30px] py-[30px]">
                        <h1 className="text-green-500 text-[25px] font-bold">MyBlog</h1>
                        <p className="text-justify">A full-stack blogging platform where users can create, edit, and delete posts, comment on others' blogs, and interact through likes. Built with Spring Boot, PostgreSQL, and React, it focuses on clean architecture, user-friendly design, and secure authentication.</p>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-gray-500 mt-[50px] xl:mt-[120px]"></div>
        </div>
    )
}

export default Projects;