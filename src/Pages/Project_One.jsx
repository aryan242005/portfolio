import NavBarTwo from "./NavBarTwo";

const Project_One = () => {
    return (
        <div>
            <NavBarTwo />
            <div className="mt-[120px] w-[1120px] mx-auto">
                <h1 className="text-center text-[40px] font-poppins font-bold text-green-500">DevConnect – A Social Platform for Developers</h1>
                <p className="text-[20px] font-poppins my-[30px] text-justify">DevConnect is an interactive social networking platform built for developers to share ideas, showcase projects, and connect with like-minded tech enthusiasts. Users can create posts, follow others, like and comment on content, and engage in real-time conversations through WebSockets. Designed with a modern tech stack (React, Spring Boot, PostgreSQL), DevConnect aims to foster collaboration and knowledge sharing in the developer community.</p>
                <div className="flex flex-col gap-16 mb-[60px]">
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Home Page</h1>
                        <img src="/project 1/ss5.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Chat Page</h1>
                        <img src="/project 1/ss4.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Post Page</h1>
                        <img src="/project 1/ss3.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Profile Page</h1>
                        <img src="/project 1/ss2.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Search Page</h1>
                        <img src="/project 1/ss1.png" className="border-black border-[5px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project_One;