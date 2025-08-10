import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o62z22p', 'template_143oxy4', e.target, 'O3mbE3ZSb_bBsoHr2')
            .then((result) => {
                console.log(result.text);
                alert("Message sent!");
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong.");
            });
    }

    return (
        <div id="contact" className="mt-[50px] max-w-[1100px] mx-auto flex flex-col items-center gap-10 xl:pt-[30px]">
            <h1 className="text-[40px] font-bold font-poppins">Contact Me</h1>
            <form onSubmit={sendEmail} className="min-w-full flex flex-col gap-10 px-[30px]">
                <div className="w-full flex gap-5">
                    <input name="first_name" type="text" className="w-full h-[50px] rounded-[10px] border-black border-[2px] pl-[15px]" placeholder="First Name" />
                    <input name="last_name" type="text" className="w-full h-[50px] rounded-[10px] border-black border-[2px] pl-[15px]" placeholder="Last Name" />
                </div>
                <input name="email" type="text" className="h-[50px] rounded-[10px] border-black border-[2px] pl-[15px]" placeholder="Email" />
                <textarea name="message" type="text" className="h-[200px] rounded-[10px] border-black border-[2px] pl-[15px] pt-[10px]" placeholder="Message" />
                <button type="submit" className="border-[1px] border-black  rounded-[10px] bg-green-500 text-white py-[10px] hover:text-green-600 hover:bg-white duration-500">Submit</button>
            </form>
        </div>
    )
}

export default Contact;