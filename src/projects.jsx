import marieconcepts  from '/images/Marieconceptproject.png'
import newswebsite  from '/images/newswebiste.png'
import derimaticweb  from '/images/derimaticweb.png'
import fantasy_gadets  from '/images/fantasy_gadets.png'
import internet  from '/images/internetinternet.png'
import github  from '/images/github_3291695.png'
const Projects = ()=>{
    return(
        <div   className=" bg-gray-50 rounded-3xl  py-20" >
       
            <div className='flex justify-center mb-10  '   >
                <h1 style={{fontFamily:"lato"}} className='font-bold text-3xl'  >My Projects.</h1>
            </div>
            <div className='flex justify-center '   >
            <div className='grid grid-cols-2 max-md:flex  max-md:flex-col   max-xsm:flex-col max-xsm:items-center  max-xsm:overflow-x-hidden  max-xsm:gap-10 gap-30 '   >
            <div className='bg-white w-128  max-xsm:w-90  py-2 shadow-md '  >
            <div  className='w-full h-60    ' >
            <img className='w-full rounded-xl object-fit' src={marieconcepts}   alt="" />
            </div>
            <div className='flex flex-col px-2 items-center justify-center ' >
            <div  >
                <h1 className='font-bold text-lg text-center '  >Graphic Desing Agency website</h1>
                <p  className='max-xsm:w-80 text-center'    >
                I designed and developed a brand identity and visual system for a creative Graphic
                 Design Agency. The project focused on creating a modern, bold, and versatile brand
                  that appeals to a wide
                 audience while maintaining a strong professional presence.
                     </p>
            </div>
            <div className='flex   mt-2'    >
            <div className='flex flex-col items-center'  >
            <a href="https://marieconceptstst.netlify.app/dist/">
            <img className='w-6' src={internet}   alt="" />
            </a> 
                <p className='font-semibold'  > Website</p>
                </div>
                <div className='ml-10 items-center flex flex-col  '   >
                    <a href="https://github.com/devharunah/Graphic-Design-Agency.git">
                    <img className='w-6' src={github}   alt="" />
                    </a>
                <p className='font-semibold'   >Github</p>
                </div>
            </div>
            </div>
        
          
         </div>
         <div className='bg-white w-128  max-xsm:w-90  py-2 shadow-md '  >
            <div  className='w-full h-60' >
            <img className='w-full rounded-xl object-fit' src={derimaticweb}   alt="" />
            </div>
            <div className='flex flex-col px-2 items-center justify-center ' >
            <div  >
                <h1 className='font-bold text-lg max-xsm:text-center '  >DJ Portfolio Website</h1>
                <p className='max-xsm:text-center  max-xsm:w-80 '    >
                I designed and developed a dynamic portfolio website for a DJ, aimed at showcasing their music, 
                events, and personal brand. The project focused on creating a bold, energetic, and interactive user
                 experience that reflects the DJ’s unique style and vibe.
                     </p>
            </div>
            <div className='flex   mt-2'    >
            <div className='flex flex-col items-center'  >
            <a href="/notfound">
                <img className='w-6' src={internet}   alt="" />
                </a>
                <p className='font-semibold'  >Website </p>
                </div>
                <div className='ml-10 items-center flex flex-col  '   >
                    <a href="https://github.com/devharunah/Dj-portfolio-website">
                    <img className='w-6' src={github}   alt="" />
                    </a>
                <p className='font-semibold'   >Github</p>
                </div>
            </div>
            </div>
        
          
         </div>
         <div className='bg-white w-128 max-xsm:w-90   py-2 shadow-md '  >
            <div  className='w-full h-60' >
            <img className='w-full rounded-xl object-fit' src={newswebsite}   alt="" />
            </div>
            <div className='flex flex-col px-2 items-center justify-center ' >
            <div  >
                <h1 className='font-bold text-lg max-xsm:text-center  '  >Forex & Bitcoin News Website</h1>
                <p  className='max-xsm:text-center max-xsm:w-80'  >
                I created a modern news website dedicated to providing real-time updates and insights on 
                Forex and Bitcoin markets. The goal was to deliver financial content in a clean, organized, and
                 user-friendly layout, making complex market information 
                accessible to traders and enthusiasts.
                     </p>
            </div>
            <div className='flex   mt-2'    >
            <div className='flex flex-col items-center'  >
            <a href="/notfound">
                <img className='w-6' src={internet}   alt="" />
                </a>
                <p className='font-semibold'  >Website </p>
                </div>
                <div className='ml-10 items-center flex flex-col  '   >
                    <a href={'notfound'}>
                    <img className='w-6' src={github}   alt="" />
                    </a>
                <p className='font-semibold'   >Github</p>
                </div>
            </div>
            </div>
        
          
         </div>
         <div className='bg-white w-128 max-xsm:w-90    py-2 shadow-md '  >
            <div  className='w-full h-60' >
            <img className='w-full rounded-xl object-fit' src={fantasy_gadets}   alt="" />
            </div>
            <div className='flex flex-col px-2 items-center justify-center ' >
            <div  >
                <h1 className='font-bold text-lg max-xsm:text-center'  >Electron E-Commerce Website</h1>
                <p className='max-xsm:w-80 max-xsm:text-center'   >
                I designed and developed a unique e-commerce website dedicated to selling electrons — a creative
                 concept built to showcase both technical web skills and imaginative digital branding. The project 
                 combined clean design, smooth user experience, and humor to
                 turn an abstract product into a marketable idea.
                </p>
            </div>
            <div className='flex   mt-2'    >
            <div className='flex flex-col items-center'  >
            <a href="/notfound">
                <img className='w-6' src={internet}   alt="" />
                </a>
                <p className='font-semibold'  >Website </p>
                </div>
                <div className='ml-10 items-center flex flex-col  '   >
                <a href="https://github.com/devharunah/e-eccormaceweb">
                <img className='w-6' src={github}   alt="" />
                </a>
                <p className='font-semibold'   >Github</p>
                </div>
            </div>
            </div>
        
          
         </div>
            </div>
            </div>
         
        </div>
    )
}
export default Projects