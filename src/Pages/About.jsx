const About = () => {
    return (
        <div id="about" className="w-full min-h-[550px] mt-[30px] px-[30px] xl:pt-[40px]">
            <div className="flex flex-col xl:flex-row mx-auto">
                <div className="flex-1 xl:pr-[60px] flex flex-col justify-center">
                    <h1 className="font-poppins text-[25px] font-semibold text-green-500">My Story</h1>
                    <p className="text-justify font-poppins text-[15px] md:text-[20px] font-semibold pb-[30px]">
                        I’m a passionate software developer with a strong foundation in Java backend development. My journey began with building RESTful APIs using Spring Boot and PostgreSQL. Over time, my curiosity led me into the world of Machine Learning, where I now enjoy building intelligent applications that solve real-world problems by combining data with smart backend systems.
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="bg-green-500 p-[10px] rounded-[30px] border-[0px] border-black shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
                        <img src="/IMG_9853.jpg" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] object-cover mx-auto rounded-[20px] bg-white border-[2px] border-black object-top" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center xl:pl-[60px] mt-[30px] xs:mt-0">
                    <h1 className="font-poppins text-[25px] font-semibold text-green-500">My Skills</h1>
                    <p className="text-justify font-poppins text-[15px] md:text-[20px] font-semibold pb-[30px]">Java, Spring Boot, REST APIs, PostgreSQL, Git & GitHub, Clean Architecture & Code Quality, Full-Stack Development</p>
                    <h1 className="font-poppins text-[25px] font-semibold text-green-500">My Goals</h1>
                    <p className="text-justify font-poppins text-[15px] md:text-[20px] font-semibold pb-[30px]">I'm currently focused on becoming a complete full-stack developer while working on AI-powered applications that create real impact and improve user experience.</p>
                </div>
            </div>
            <div className="border-[1px] border-gray-500 xl:mt-[100px] mb-[70px]"></div>
        </div>
    )
}

export default About;