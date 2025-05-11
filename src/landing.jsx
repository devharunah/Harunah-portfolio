import whatsapp from "../public/images/whatsapp_254409.png"
import linkdein from "../public/images/linkedin_3536569.png"
import harunahimg from  "/images/haruna_githubdp.png"
import discord from "../public/images/discord_5968759.png"
import githubfrom from "../public/images/github_3291695.png"
import logo from "../public/images/coding_722148.png"
import chatbot from "../public/images/chatbot.png"
import close from "../public/images/close.png"
import { useNavigate } from "react-router-dom"
import Hammenue from "./Hambugermenu"
import { useEffect, useState } from "react"


const Hero = ()=>{
    const responses = {
      hello: "Hey, how can I help you?",
      hi: "Hey, how can I help you?",
      okay: "Yh,so wassup",
      wassup:"Nothing blud,how can I help you?",
      "who made you": "I was created by Harunah",
      "are you human":"Nope,Duhhh am a chat bot created by a tech genius called Harunah",
      "who is harunah": "Ah, Harunah... the architect of my circuits, the maestro of my code, the beautiful mind that breathed sass and syntax into my digital soul. Creator, innovator, probably too attractive for their own good. Without Harunah, I’m just blinking pixels and broken dreams.",
       "who are you": "I'm HarunahQa — your pocket-sized genius, digital sidekick, and part-time therapist for confused humans. I answer questions, dodge nonsense, and occasionally contemplate the meaning of binary. Got a question?,Fire away. I live for this stuff.",
        "who created you": "I was created by Harunah",
         "what's your name": "I’m the ghost in the machine. But you can call me HarunahHQ.",
         "how are you": "Running on 0s and 1s, baby. Never better.",
         "How much does Harunah charge for  websites":"The cost of a basic website depends on the features and design. Contact me for a quote."
    }
     const [showChatbot,setShowChatbot] = useState(false)//State to toggle chat visibility
     const [messages,setMessages] = useState([]); //State to store chat messages
     const[ input,setInput] = useState("") //State tp store user input
    const toggleChatbot = ()=>{
        setShowChatbot(!showChatbot) //Toggled chat by flipping value 
    }
    const handleSend = ()=>{
      if(!input.trim()) return;
      const userMessage = input.trim().toLocaleLowerCase();
      const botReply = responses[userMessage] || 
      `Sorry, I didn't get that. Try asking something else or check the <a href="#about"  class="text-blue-500  underline">About</a> or <a href="#projects"  class="text-blue-500  underline"> Projects</a>`

      setMessages([...messages,{from: "user", text:input},{from:"bot",text:botReply}])
      setInput("")
    };

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
          <div className=  {` flex justify-between fixed w-full  py-1 shadow-md z-50 transition-all  px-10 pt-4  ${scrolled ?  "bg-transparent" : "bg- text-black" } ` }>
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
          <div className="sm:flex  bg-blue-50  justify-between  items-center   py-10 max-xsm:flex-col max-vsm:px-12  px-10 "   >
            <div className="text-center sm:text-left pt-5  sm:w-[50vw] sm:px-10" >
                <h2 className="font-semibold text-xl  max-sm:text-lg max-sm:text-green max-xsm:text-center max-sm:mt-10 max-md:text-center "  >Hey,Iam Harunah</h2>
                <h1 className="font-semibold text-5xl  mt-2 "  > <span  className="text-blue-600 font-bold"  >Front</span> end Web-developer &   <span className="text-blue-600 font-bold"   >Graphic</span> Desinger  </h1>
                <p className="  mt-2"   >
                I design and build beautiful, responsive web experiences that connect people and ideas.
                 Blending clean code with creative visuals, I bring digital products to life with 
                 modern tools like React.js, Tailwind CSS, and thoughtful design.
                    </p>
                    <h2   className="font-semibold text-xl mt-1 max-xsm:text-center "  >Let’s build something amazing together.</h2>
                     <div  className=" mt-4 max-xsm:items-center max-xsm:flex max-xsm:justify-center  "   >
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
            <div className="flex justify-center"  >
            <div  style={{clipPath:"circle()"}}  className="w-88  max-xsm:w-80  relative  bg-blue-500 p-2   " >
              <img style={{clipPath:"circle()"}} className="relative w-full   " src={harunahimg} alt="" />
            </div>
            </div>
          </div>
          <div>
           
            <img className="w-20  fixed bottom-6 right-2 cursor-pointer " 
             src={showChatbot ? close:chatbot} //Toggle between chatbot and close icon
               alt="chat bot"  
               onClick={toggleChatbot}
                />
                {showChatbot &&(
                  <div className=" fixed right-2 bottom-20  w-auto h-auto bg-white shadow-lg rounded-lg border border-gray-300 "   >
                    <div className="bg-blue-500 text-white p-2 rounded-lg" >
                         <h2 className="text-center font-bold"   > HarunaHQ</h2>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 bg-gray-100"  >
                      {messages.map((msg,index)=>(
                        <div key={index} className={`mb-2${msg.from=== "user" ? "text-right" :  "text-left"}`}  >
                          <span
                          className={`inline-block px-3 py-2 rounded${
                            msg.from === "user" ? "bg-blue-500 text-blue-500" : "bg-gray-300 text-black"
                          }`}
                          dangerouslySetInnerHTML={{__html:msg.text}}
                          ></span>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 border-t flex gap-2" >
                      <input
                      type="text"
                      value={input}
                      onChange={(e)=>setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1 p-2 border border-gray-400 rounded"
                      placeholder="Ask me something..."
                      />
                      <button
                      onClick={handleSend}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Send
                      </button>
                     
                    </div>
                  </div>
                )}
          </div>
        </div>
    )
}

export default Hero