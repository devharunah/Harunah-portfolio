import whatsapp from "../public/images/whatsapp_254409.png"
import linkdein from "../public/images/linkedin_3536569.png"
import harunahimg from  "/images/haruna_githubdp.png"
import discord from "../public/images/discord_5968759.png"
import githubfrom from "../public/images/github_3291695.png"
import logo from "../public/images/coding_722148.png"
import { useNavigate } from "react-router-dom"
import Hammenue from "./Hambugermenu"
import { useEffect, useState } from "react"
const Hero = ()=>{
  const navigate = useNavigate()
  const handlenaviagte = ()=>{
    navigate('/projects')
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
          <div className=  {` flex justify-between fixed w-full  py-1 shadow-md z-50 transition-all  px-10 pt-4  ${scrolled ?  "bg-white" : "bg-transparent text-black" } ` }     >

            <div  className="flex items-center mb-2"  >
              <img className="w-6 max-vsm:w-4 max-vsm:hidden   mr-2" src={logo} alt="" />
            <h1 className="font-bold text-2xl   max-vsm:text-xl">    <a href={'/'}> DevHarunah.</a> </h1>
            <Hammenue  />
            </div>

            <div className="not-firs max-xsm:hidden  "  >
                <ul className="flex justify-between  " >
                    <li   className="mr-6" >  <a href="/"> Home  </a>  </li>
                    <li className="mr-6"  >  <a href="/about">  About </a>   </li>
                    <li > <a href="/projects">Projects</a></li>
                </ul>
            </div>
            
            <div  className="flex justify-between w-40 max-xsm:hidden  "  >
            <div>
            <a href={whatsappLink}>
            <img className="w-6" src={whatsapp}  alt="" />
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/kakooza-harunah-701882350/">
            <img className="w-6" src={linkdein}  alt="" />
            </a>
          </div>
          <div>
            <a href="https://discord.com/channels/@me">
            <img className="w-6" src={discord}  alt="" />
            </a>
          </div>
          <div>
            <a href="https://github.com/devharunah">
            <img className="w-6" src={githubfrom}  alt="" />
            </a>
          </div>
      
            </div>
          </div>
          <div className="flex  bg-blue-50  justify-between  items-center rounded-4xl  py-10 max-xsm:flex-col max-vsm:px-12  px-10 "   >
            <div >
                <h2 className="font-semibold text-xl  max-sm:text-lg max-sm:text-green max-sm:mt-10 "  >Hey,Iam Harunah</h2>
                <h1 className="font-semibold text-4xl  mt-2  w-128 max-md:text-3xl max-md:w-100 max-sm:w-90 max-sm:text-3xl  "  > <span  className="text-blue-600 font-bold"  >Front</span> end Web-developer &   <span className="text-blue-600 font-bold"   >Graphic</span> Desinger  </h1>
                <p className="w-128  mt-2 max-md:w-80  "   >
                I design and build beautiful, responsive web experiences that connect people and ideas.
                 Blending clean code with creative visuals, I bring digital products to life with 
                 modern tools like React.js, Tailwind CSS, and thoughtful design.
                    </p>
                    <h2   className="font-semibold text-xl mt-1"  >Let’s build something amazing together.</h2>
                     <div  className=" mt-4  "   >
                        <button  onClick={handlenaviagte} className=" border-2 border-blue-500 cursor-pointer  py-1 px-1 rounded-sm "   >
                            View projects
                        </button>
                        <button className="bg-black text-white py-1 cursor-pointer ml-2 px-5 rounded-sm"  >
                         <a href={whatsappLink}>
                         Hire me 
                         
                         </a>
                            
                        </button>
                     </div>
            </div>
            <div  style={{clipPath:"circle()"}}  className="w-88  max-xsm:hidden relative  bg-blue-500 p-2   " >
              <img style={{clipPath:"circle()"}} className="relative w-full   " src={harunahimg} alt="" />
            </div>
          </div>
          
        </div>
    )
}

export default Hero