import whatsapp from "../public/images/whatsapp_254409.png"
import linkdein from "../public/images/linkedin_3536569.png"
import harunahimg from  "/images/dark_cartoon.png"
import discord from "../public/images/discord_5968759.png"
import githubfrom from "../public/images/github_3291695.png"
import logo from "../public/images/coding_722148.png"
import chatbot from "../public/images/chatbot.png"
import close from "../public/images/close.png"
import { useNavigate } from "react-router-dom"
import Hammenue from "./Hambugermenu"
import { useEffect, useState } from "react"


const Hero = ()=>{
   

  const navigate = useNavigate()
  const handlenaviagte = ()=>{
    navigate('/projects')
  }
  const aboutnavigate =()=>{
    navigate('/about')
  }
  const message = "Hello, I would like to use your service"
  const encodedmessage  = encodeURIComponent(message)
  const phonenumber = 256778895217;
  const whatsappLink = `https://wa.me/${phonenumber}?text=${encodedmessage}`;
  const [scrolled,setScrolled] = useState(false);
  
  useEffect( ()=>{
    const handlescroll = ()=>{
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll",handlescroll);
    return () => window.removeEventListener("scroll",handlescroll);
  },[ ]);
    return(
        <div>
          <div className=  {` flex justify-between fixed w-full rounded-xl  py-1 z-50 transition-all  px-10 pt-4  ${scrolled ?  "bg-white  shadow" : "bg- text-black" } ` }>
            <div  className=" justify-between flex w-full mb-2 sm:w-auto "  >
              <div className="flex items-center"  >
                <div>
                <img className="w-[1em] max-vsm:w-4 max-vsm:hidden   mr-2" src={logo} alt="" />
                </div>
              <h1 className="text-xl font-bold sm:text-2xl">    <a href={'/'}> DevHarunah.</a> </h1>
              </div>
            <div>
            <Hammenue  />
            </div>
            </div>

            <div className="hidden md:flex  "  >
                <ul className="flex justify-between  " >
                    <li   className="mr-6" >  <a href="/"> Home  </a>  </li>
                    <li onClick={aboutnavigate} className="mr-6"  >   About  </li>
                    <li onClick={handlenaviagte} > Projects</li>
                </ul>
            </div>
            
            <div  className=" justify-between w-40 hidden sm:flex "  >
            <div>
            <a href={whatsappLink}>
            <img className="w-[1.5em]" src={whatsapp}  alt="" />
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/kakooza-harunah-701882350/">
            <img className="w-[1.5em]" src={linkdein}  alt="" />
            </a>
          </div>
          <div>
            <a href="https://discord.com/channels/@me">
            <img className="w-[1.5em]" src={discord}  alt="" />
            </a>
          </div>
          <div>
            <a href="https://github.com/devharunah">
            <img className="w-[1.5em]" src={githubfrom}  alt="" />
            </a>
          </div>
      
            </div>
          </div>
          <div className="sm:flex  justify-between  items-center border-2 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%  py-15 max-xsm:flex-col max-vsm:px-12  px-10 "   >
            <div className="text-center sm:text-left py-10 space-y-4 sm:w-[50vw] sm:px-10" >
              <h1 className="font-bold" >Hey,I am Harunah</h1>
               <div>
                <h1 className="font-bold text-2xl sm:text-5xl" >Building Digital <span className="text-white" >Solutions</span>  with Purpose</h1>
               </div>
                <p className=" text-gray-900 mt-2"   >
                I design and build beautiful, responsive web experiences that connect people and ideas.
                 Blending clean code with creative visuals, I bring digital products to life with 
                 modern tools like React.js, Tailwind CSS, and thoughtful design.
                    </p>
                    <h2   className="font-semibold text-xl mt-1 max-xsm:text-center "  >Let’s build something amazing together.</h2>
                     <div  className=" mt-4 max-xsm:items-center space-x-4 max-xsm:flex max-xsm:justify-center  "   >
                        <button  onClick={handlenaviagte} className=" bg-black  cursor-pointer py-2 px-4 text-white hover:bg-gray-300 rounded-sm "   >
                            View projects
                        </button>
                        <button className="bg-white py-2 px-6 cursor-pointer8  ml-2 rounded-sm"  >
                         <a href={whatsappLink}>
                         Hire me 
                         
                         </a>
                            
                        </button>
                     </div>
            </div>
            <div className="flex justify-center"  >
            <div   className="max-w-xl  max-xsm:w-80  relative " >
              <img  className="relative w-full   " src={harunahimg} alt="" />
            </div>
            </div>
          </div>
        </div>
    )
}

export default Hero