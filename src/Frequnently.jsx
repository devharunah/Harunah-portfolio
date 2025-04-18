import rightarrow from "../public/images/right-arrow.png"
import plusicon from "../public/images/plus.png"
const Frequnently = ()=>{
    const message = "Hello, I have a question."
    const encodedmessage  = encodeURIComponent(message)
    const phonenumber = 256778895217;
    const whatsappLink = `https://wa.me/${phonenumber}?text=${encodedmessage}`;
    return(
        <div  className="mt-15 px-10 bg-gray-50 py-20 items-center flex  justify-center"  >
        <div  className="flex   max-sm:items-center max-sm:justify-center max-sm:flex-col "  >
        <div >
            <h1 style={{fontFamily:"lato"}} className="font-bold text-3xl  max-xsm:text-center "  >Any Quetions ?</h1>
            <h1 style={{fontFamily:"lato"}} className="font-bold text-3xl  max-xsm:text-center  "  >I gat you</h1>
            <p  className="w-100  mt-4 max-xsm:text-center max-xsm:w-80 "  >
            Have questions? I’ve put together some of the most common inquiries about my services, skills,
             and workflow. Whether you’re curious about the tools I use, how I work with 
            clients, or how to start a project with me — you’ll find quick answers here.
            </p>
                <div className="flex  items-center mt-2"  >
                <p  className="font-semibold max-xsm:text-center  text-blue-500  cursor-pointer "  > <a href={whatsappLink}  >More FAQs on WhatsApp</a> </p>
                <img className="w-5 ml-4" src={rightarrow}  alt="" />
                </div>
        </div>
        <div className="ml-20 max-xsm:ml-0 "  >
            <h1  style={{fontFamily:"lato"}}  className="font-bold text-3xl max-sm:mt-2  "   >Freqently Asked Quetions FAQS</h1>
            <div className="py-2 shadow-md mt-2 flex items-center justify-between px-1"  >
                <p>How much do you charge for a basic website?</p>
                <img className="w-6  cursor-pointer " src={plusicon}  alt="" />
            </div>
            <div className="py-2 shadow-md mt-2 flex items-center justify-between px-1"  >
                <p>Are those the only tecnolgies you use?</p>
                <img className="w-6  cursor-pointer " src={plusicon}  alt="" />
            </div>
            <div className="py-2 shadow-md mt-2 flex items-center justify-between px-1"  >
                <p>Do you have any online platform for teacing ?</p>
                <img className="w-6  cursor-pointer " src={plusicon}  alt="" />
            </div>
            <div className="py-2 shadow-md mt-2 flex items-center justify-between px-1"  >
                <p>Do you also work on graphic Desing projects</p>
                <img className="w-6  cursor-pointer " src={plusicon}  alt="" />
            </div>
        </div>
        </div>
        </div>
    )
}
export default Frequnently