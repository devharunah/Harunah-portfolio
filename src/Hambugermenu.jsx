import { useState } from "react";
import whatsapp from "../public/images/whatsapp_254409.png"
import linkdein from "../public/images/linkedin_3536569.png"
import discord from "../public/images/discord_5968759.png"
import githubfrom from "../public/images/github_3291695.png"
import { useNavigate } from "react-router-dom";
const Hammenue = () =>{
    const navigate = useNavigate()
    const handlenaviagte = ()=>{
        navigate('/projects')
      }
      const aboutnavigate =()=>{
        navigate('/about')
      }
    const [isopen,setisopen] = useState(false)
    const closenavbar = () =>{
        setisopen(false)
    }
    return(
        <div>
              <div className=" w-auto  h-auto sm:hidden static right-0  "  >
                      <div onClick={ ()=>{setisopen(!isopen)}} style={{borderRadius:"9999999999999px"}} className="w-6 h-1  bg-black  cursor-pointer  z-50" > </div>
                      <div onClick={ ()=>{setisopen(!isopen)}} style={{borderRadius:"9999999999999px"}} className="w-6 h-1 bg-black mb-1 mt-1 cursor-pointer bg-balck" ></div>
                      <div onClick={ ()=>{setisopen(!isopen)}} style={{borderRadius:"9999999999999px"}} className="w-6 h-1  bg-black  cursor-pointer" ></div>
                      </div>

                      <div style={{ backgroundColor:"rgba(0, 0, 0, 0.8)"}}  className={ ` ${isopen ? 'block': 'hidden'}   h-screen w-128 z-50 fixed right-0 top-0` }  >
                            <ul className="flex justify-center items-center flex-col" >
                            <li  className="text-white text-xl mt-10"  > <a href="/"> Home  </a>   </li>
                            <li onClick={aboutnavigate}  className="text-white text-xl  mt-10 "  > <a href="/about"> About  </a>   </li>
                            <li onClick={handlenaviagte} className="text-white text-xl mt-10  "   > <a href="/projects"> Projects  </a>   </li>
                            </ul>
                          
                     <div className="flex justify-center items-center relative top-20"  >
                                <div onClick={closenavbar} className="bg-black cursor-pointer text-white px-4 py-2"  >Close menue</div>
                            </div>
                            <div  className=" justify-between mt-40 ml-20  flex "  >
                                        <div>
                                        <a className="items-center flex flex-col" >
                                        <img className="w-[1.5em]" src={whatsapp}  alt="" />
                                        <p className="text-white"   >Whatsapp</p>
                                        </a>
                                      </div>
                            
                                      <div>
                                        <a className="flex flex-col items-center" href="https://www.linkedin.com/in/kakooza-harunah-701882350/">
                                        <img className="w-[1.5em]" src={linkdein}  alt="" />
                                        <p  className="text-white" >Linkdin</p>
                                        </a>
                                      </div>
                                      <div>
                                        <a className="flex flex-col justify-center items-center" href="https://discord.com/channels/@me">
                                        <img className="w-[1.5em]" src={discord}  alt="" />
                                        <p  className="text-white" >Discord</p> 
                                        </a>
                                      </div>
                                      <div>
                                        <a className="flex flex-col items-center justify-center" href="https://github.com/devharunah">
                                        <img className="w-[1.5em]" src={githubfrom}  alt="" />
                                        <p className="text-white"  >Github</p>
                                        </a>
                                      </div>
                     </div>
        </div>
        </div>
    )
}
export default Hammenue