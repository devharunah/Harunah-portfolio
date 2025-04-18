import whatsapp from '../public/images/whatsappclr.png'
import linkdin from '../public/images/linkedinclr.png'
  const Footer = ()=>{
     const message = "Hello, I would like to use your service"
      const encodedmessage  = encodeURIComponent(message)
      const phonenumber = 256778895217;
      const whatsappLink = `https://wa.me/${phonenumber}?text=${encodedmessage}`;
    
        return(
            
        <footer className=" w-full pt-12 px-4  bg-blue-950  "   >
         
            <div  className="grid grid-cols-3 max-xsm:flex max-xsm:flex-col  " >
            <div>
            <h1 style={{fontFamily:"lato"}} className="font-bold  text-white text-xl"  >About me. </h1>
            <p  className="text-white w-100  max-sm:w-50 "  >
            I'm a skilled front-end web developer and graphic designer from Uganda. I specialize in React.js, JavaScript,
            TypeScript, Tailwind CSS, HTML, CSS, and Adobe Photoshop &
            Illustrator. I'm dedicated to crafting innovative digital solutions with 
            precision and creativity.
            </p>
            </div>
            <div>
                <h1 style={{fontFamily:'lato'}}  className="text-white font-bold text-xl "  >Quick Links.</h1>
                <ul  className="text-white  list-none  "  >
                    <li className="mb-2" > <a href={`/about`}   >About</a> </li>
                    <li  className="mb-2"  >  <a href={'/projects'}>Portfolio</a>  </li>
                    <li className="mt-2"  > <a href={"/"}>Home</a>  </li>
                </ul>
            </div>
            <div>
                <h1 style={{fontFamily:'lato'}} className="text-white text-xl font-bold" >My Socials.</h1>
                <div  className="flex pt-4 "  >
                <div  className='items-center flex justify-center flex-col'  >
                  <a href="#"> <img className='w-6' src={whatsapp} alt="" />   </a>
                    <p className='text-white'  >WhatsApp</p>
                    </div>

                    <div  className='items-center flex justify-center ml-6 flex-col'  >
                        <a href="#">  <img className='w-6' src={linkdin} alt="" /></a>
                        <p className='text-white'  >  <a href="https://www.linkedin.com/in/kakooza-harunah-701882350/">Linkdin</a> </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex justify-between mt-10  max-xsm:flex-col"  >
                <p className="text-gray-400"  >Copyright © 2023 DevHarunah. All rights reserved.</p>
                <p className="text-gray-400"  >  <a href={whatsappLink}>Designed by Kakooza Harunah</a>    </p>
                <p className="text-gray-400"  >  <a href={whatsappLink}>Designed by Kakooza Harunah</a> </p>
                </div>
        </footer>
        )
    }
    export default Footer;