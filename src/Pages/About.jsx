const About = () => {
    return (
        <div id="about" className="pt-[70px]">
            <div className="flex w-[1320px] h-[550px] mx-auto mt-[35px]">
                <div className="flex-1 pr-[60px] flex flex-col justify-center">
                    <h1 className="font-poppins text-[25px] font-semibold text-green-500">My Story</h1>
                    <p className="text-justify font-poppins text-[20px] font-semibold pb-[30px]">
                        I’m a passionate software developer with a strong foundation in Java backend development. My journey began with building RESTful APIs using Spring Boot and PostgreSQL. Over time, my curiosity led me into the world of Machine Learning, where I now enjoy building intelligent applications that solve real-world problems by combining data with smart backend systems.
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="bg-green-500 p-[10px] rounded-[30px] border-[0px] border-black shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
                        <img src="/rmbg_aryan.png" className="w-[400px] h-[400px] object-cover mx-auto rounded-[20px] bg-white border-[2px] border-black object-top" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center pl-[60px]">
                    <h1 className="font-poppins text-[25px] font-semibold text-green-500">My Skills</h1>
                    <p className="text-justify font-poppins text-[20px] font-semibold pb-[30px]">Java, Spring Boot, REST APIs, PostgreSQL, Git & GitHub, Clean Architecture & Code Quality, Full-Stack Development</p>
                    <h1 className="font-poppins text-[25px] font-semibold text-green-500">My Goals</h1>
                    <p className="text-justify font-poppins text-[20px] font-semibold pb-[30px]">I'm currently focused on becoming a complete full-stack developer while working on AI-powered applications that create real impact and improve user experience.</p>
                </div>
            </div>
        </div>
    )
}

export default About;