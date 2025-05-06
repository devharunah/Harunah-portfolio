import cssimage from "/images/css_919826.png"
import javascriptimage from "/images/js_5968292.png"
import reactimage from "/images/atom_4969244.png"
import figmaimage from "/images/typescript_5968381.png"
import illustratorimage from "/images/html-5_5968267.png"
import photoshopimage from "/images/photoshop_5968520.png"
import { useNavigate } from "react-router-dom"

const About = ()=>{

    const navigate = useNavigate();
    const readmoreclick = ()=>{
        navigate('/projects')
    }
    return(
        <div  className="py-20 mt-20 bg-gray-50  " >
            <div  className="flex justify-center mb-10"  >    
                <h1 style={{fontFamily:"lato"}} className="text-3xl font-bold"   >About me</h1>
            </div>
               <div  className="flex  justify-center  max-md:flex-col items-center"  >
               <div  className=" hidden  sm:grid grid-cols-1 gap-2 sm:grid-cols-2"  >    
               <div className="flex flex-col justify-center items-center px-20 py-20 sm:py-10 sm:px-10 bg-blue-500 " >
                    <h1 className="font-semibold text-lg"  >Repositories</h1>
                    <p className="font-bold text-2xl"  >15+</p>
                </div>
                <div className="flex flex-col justify-center items-center px-20 py-20 sm:py-10 sm:px-10 bg-blue-500 " >
                    <h1 className="font-semibold text-lg"  >Exprience</h1>
                    <p className="font-bold text-2xl"  >3+yrs</p>
                </div>
                <div className="flex flex-col justify-center items-center px-20 py-20 sm:py-10 sm:px-10 bg-blue-500 " >
                    <h1 className="font-semibold text-lg"  >Projects</h1>
                    <p className="font-bold text-2xl"  >100+</p>
                </div>
                <div className="flex flex-col justify-center items-center px-20 py-20 sm:py-10 sm:px-10 bg-blue-500 " >
                    <h1 className="font-semibold text-lg"  >Clients</h1>
                    <p className="font-bold text-2xl"  >10+</p>
                </div>
                <div className="flex justify-center mt-4 items-center"  >
                <button  className="py-1 px-4 cursor-pointer  rounded-md outline-0 border-2" onClick={readmoreclick} >Read more </button>
                <button  className="py-2 px-6 bg-blue-500 ml-4 text-white  cursor-pointer rounded-md outline-0 border-0" >Hire me </button>
                </div>  
            </div>
                    <div >
                        <div className=" sm:w-[50vw]  px-10" >
                        <h1 className="font-semibold text-2xl text-center "  >A Passionate Frontend Developer & Graphic Designer Crafting Digital Experiences.</h1>
                        <p className="text-center mt-4 " >
                        I'm Harunah, a front-end web developer and graphic designer from Uganda. 
                        I’m passionate about crafting clean,
                         responsive websites and intuitive user interfaces that make an impact.
With a growing skill set in React.js, Tailwind CSS, and modern design tools, I’m driven by a desire to turn ideas into
 meaningful digital experiences. Whether it's building web apps, designing brand visuals, or collaborating on 
 creative projects, I’m always eager to learn, grow, and push boundaries.
                            </p>
                        </div>
                       
                    </div>
               </div>
               <div className="mt-10   "  >
                <div  className=" justify-center items-center hidden md:flex  "   >
                <h1 style={{fontFamily:'lato'}} className="font-bold text-2xl">Tecnologies Used </h1>
                </div>
                <div className="hidden md:flex  justify-between px-6  items-center my-10 overflow-hidden   "  >
                    <div className="hidden items-center animate-scroll justify-between md:flex w-[100vw]  "   >
                    <div className="items-center  flex-col  mr-6   "  >
                                <img  className="w-24 object-contain  " src={cssimage} alt="" />
                                </div>
                                <div className="items-center flex flex-col w-24 h-24 ml-6   "  >
                                <img  className="object-contain  " src={javascriptimage} alt="" />
                             
                                </div>
                                <div className="items-center flex flex-col"  >
                                <img  className="w-24" src={reactimage} alt="" />
                              
                                </div>
                                <div className="items-center flex flex-col"  >
                                <img  className="w-24" src={figmaimage} alt="" />
                              
                                </div>
                                <div className="items-center flex flex-col   "  >
                                <img  className="w-24" src={illustratorimage} alt="" />
                            
                                </div>
                                <div className="items-center flex flex-col"  >
                                <img  className="w-24" src={photoshopimage} alt="" />
                            
                                </div>
                    </div>
                      </div>
                    </div>
                    <style jsx>  {`
                        
                        .animate-scroll{
                        display:flex;
                        animation:scroll 15s linear infinite;
                        }
                        @keyframes scroll{
                        0%{
                        transform:translateX(100%)
                        }
                        100%{
                        transform:translateX(-100%);
                        }
                        }
                        
                   ` }
                    
                    </style>
        </div>  

    )
}
export default About