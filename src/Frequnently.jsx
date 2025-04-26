import rightarrow from "../public/images/right-arrow.png"
import plusicon from "../public/images/plus.png"
import minusicon from "../public/images/minus-sign.png"
import {useState} from "react"
const Frequnently = ()=>{
    const [ activeQuetion,setActiveQuestion] = useState(null);
    const toggleAnswer = (index) => {
        setActiveQuestion(activeQuetion===index ? null : index);
    };
    const faqs = [
        {
            question: "How much do you charge for a basic website?",
            answer: "The cost of a basic website depends on the features and design. Contact me for a quote.",

        },
        {
            question: "Do you have any online platform for teaching?",
            answer: "Yes, I offer online courses and tutorials on various platforms. Check my website for details.",
         
        },
        {
            question: "Do you also work on graphic design projects?",
            answer: "Yes, I do graphic design projects. Feel free to reach out for more information.",
          
         
        },
        {
            question: "Do you work on projects outside Uganda?",
            answer: "Yes, I work on projects globally. Distance is not a barrier for collaboration.",
        
         
        },
        
    ]
    const message = "Hello, I have a question."
    const encodedmessage  = encodeURIComponent(message)
    const phonenumber = 256778895217;
    const whatsappLink = `https://wa.me/${phonenumber}?text=${encodedmessage}`;
    return(
        <div  className="mt-15 px-10 bg-gray-50 py-20 items-center flex  justify-center"  >
        <div  className="flex   max-sm:items-center max-sm:justify-center max-sm:flex-col "  >
        <div >
            <h1 style={{fontFamily:"lato"}} className="font-bold text-3xl  text-center "  >Any Quetions ?</h1>
            <h1 style={{fontFamily:"lato"}} className="font-bold text-3xl  text-center  "  >I gat you</h1>
            <div className="text-center"   >
            <p  className=" mt-4 max-xsm:text-center  "  >
            Have questions? I’ve put together some of the most common inquiries about my services, skills,
             and workflow.
            </p>
            </div>
                <div className="flex  items-center mt-2"  >
                <p  className="font-semibold max-xsm:text-center  text-blue-500  cursor-pointer "  > <a href={whatsappLink}  >More FAQs on WhatsApp</a> </p>
                <img className="w-5 ml-4" src={rightarrow}  alt="" />
                </div>
        </div>
        <div className="ml-20 max-xsm:ml-0 "  >
            <h1  style={{fontFamily:"lato"}}  className="font-bold text-3xl max-sm:mt-2  "   >Freqently Asked Quetions FAQS</h1>
            {faqs.map((faq,index)=>(
               <div key={index} className="py-2 shadow-md mt-2 px-1">
                    <div className="flex items-center justify-between"  >
                    <p> {faq.question} </p>
                <img className='w-6 cursor-pointer' src={activeQuetion ===index ? minusicon : plusicon} alt="" onClick={() => toggleAnswer(index)} />
                    </div>
                    {activeQuetion === index &&(
                        <div className="mt-2"  >
                           <p className="text-12 text-blue-700"  > {faq.answer}  </p>
                        </div>
                    )}

               </div>
            ))}
           
        </div>
        </div>
        </div>
    )
}
export default Frequnently