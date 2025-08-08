import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div id="projects" className="mb-[120px] font-poppins">
            <h1 className="text-[40px] font-bold text-center pt-[90px] mb-[50px]">My Projects</h1>
            <div className="grid grid-cols-2 gap-10 w-[1320px] mx-auto place-items-center">
                <div onClick={() => navigate("/devconnect")} className="w-[600px] h-[300px] flex  justify-center items-center border-[1px] border-black rounded-[10px]">
                    <div className="h-full flex-1">
                        <img src="/project 1/ss5.png" className="w-full h-full object-cover rounded-l-[10px]" />
                    </div>
                    <div className="flex-1 px-[30px]">
                        <h1 className="text-green-500 text-[25px] font-bold">DevConnect</h1>
                        <p className="text-justify">A full-stack social platform for developers to connect, share posts, follow others, and interact in real time. Built with Spring Boot and React, DevConnect brings the developer community together through clean UI, smart features, and a scalable backend.</p>
                    </div>
                </div>
                <div onClick={() => navigate("/myblog")} className="w-[600px] h-[300px] flex  justify-center items-center border-[1px] border-black rounded-[10px]">
                    <div className="h-full flex-1">
                        <img src="/project 2/ss7.png" className="w-full h-full object-cover rounded-l-[10px]" />
                    </div>
                    <div className="flex-1 px-[30px]">
                        <h1 className="text-green-500 text-[25px] font-bold">MyBlog</h1>
                        <p className="text-justify">A full-stack blogging platform where users can create, edit, and delete posts, comment on others' blogs, and interact through likes. Built with Spring Boot, PostgreSQL, and React, it focuses on clean architecture, user-friendly design, and secure authentication.</p>
                    </div>
                </div>
                {/* <div className="w-[600px] h-[300px] flex  justify-center items-center border-[1px] border-black rounded-[10px]">
                    <div className="h-full flex-1">
                        <img src="/project 2/ss7.png" className="w-full h-full object-cover rounded-l-[10px]" />
                    </div>
                    <div className="flex-1 px-[30px]">
                        <h1 className="text-green-500 text-[25px] font-bold">RoadCare</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias exercitationem beatae eveniet harum nihil suscipit commodi in sequi sunt nisi quam fuga totam, excepturi ullam ducimus debitis eos, autem aspernatur cumque illo asperiores facilis repellendus illum! Harum soluta iusto animi.</p>
                    </div>
                </div>
                <div className="w-[600px] h-[300px] flex  justify-center items-center border-[1px] border-black rounded-[10px]">
                    <div className="h-full flex-1">
                        <img src="/project 2/ss7.png" className="w-full h-full object-cover rounded-l-[10px]" />
                    </div>
                    <div className="flex-1 px-[30px]">
                        <h1 className="text-green-500 text-[25px] font-bold">Text Predictor</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias exercitationem beatae eveniet harum nihil suscipit commodi in sequi sunt nisi quam fuga totam, excepturi ullam ducimus debitis eos, autem aspernatur cumque illo asperiores facilis repellendus illum! Harum soluta iusto animi.</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects;