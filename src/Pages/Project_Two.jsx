import NavBarTwo from "./NavBarTwo";  

const Project_Two = () => {
    return (
        <div>
            <NavBarTwo />
            <div className="mt-[120px] w-[1120px] mx-auto">
                <h1 className="text-center text-[40px] font-poppins font-bold text-green-500">MyBlog – A Personal Blogging Platform</h1>
                <p className="text-[20px] font-poppins my-[30px] text-justify">MyBlog is a modern blogging platform where users can create, edit, and share posts seamlessly. It supports image uploads, pagination, sorting, and secure authentication via JWT and OAuth2 (Google login). Readers can interact through likes and comments, while the feed is personalized based on followed authors. Built with React, Spring Boot, and PostgreSQL, MyBlog delivers a clean, responsive, and user-friendly blogging experience.</p>
                <div className="flex flex-col gap-16 mb-[60px]">
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Home Page</h1>
                        <img src="/project 2/ss7.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Posts Page</h1>
                        <img src="/project 2/ss6.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Post Details Page</h1>
                        <img src="/project 2/ss5.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Description Page</h1>
                        <img src="/project 2/ss4.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Comments Page</h1>
                        <img src="/project 2/ss3.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Create Post Page</h1>
                        <img src="/project 2/ss2.png" className="border-black border-[5px]" />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-bold text-green-500 font-poppins my-[30px] text-justify">Profile Page</h1>
                        <img src="/project 2/ss1.png" className="border-black border-[5px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project_Two;