import webdevimage from '/images/coding_722148.png'
import webdesignimage from '/images/vector_5737922.png'
import graphicdesignimage from '/images/slide_4389831.png'
import brandingimage from '/images/print_11434407.png'
const Services = ()=>{
    return(
       <div  className="mt-10"  >
        <div className="flex justify-center"  >
            <h1 style={{fontFamily:'lato'}} className="font-bold text-3xl"  >Services.</h1>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4   px-15 py-10 items-center"  >
            <div  className=" border-2 border-gray-200 py-20 flex justify-center items-center flex-col px-10 sm:py-auto w-full h-auto rounded-md "  >
                  <div className='mb-4   '   >
                    <div className='w-14'  >
                    <img className='w-full max-xsm:w-12   ' src={webdevimage}   alt="" />
                    </div>
                  </div>
                  <h1 className='font-bold text-xl  sm:text-3xl text-center '>Web Development</h1>
                  <div className=''   >
                  <p  className=' mt-4  text-center '  >
                  I specialize in designing and developing responsive, user-friendly websites using modern
                   front-end technologies like React.js and Tailwind CSS.  
                  </p>
                  </div>
                 
                </div>
                <div  className=" border-2 border-gray-200  flex justify-center py-20 px-10 items-center flex-col  w-full h-auto"  >
                  <div className="mb-4 w-15 "   >
                    <img className='w-full max-xsm:w-12' src={webdesignimage}   alt="" />
                  </div>
                  <h1 className='font-bold  text-xl  sm:text-3xl'   >Graphic Design</h1>
                  <p  className=' mt-4   text-center '  >
                  As a graphic designer, I combine creativity with functionality to produce designs that
                   communicate your message clearly and effectively. 
                  </p>
                </div>
                <div  className=" border-2 border-gray-200 flex justify-center items-center flex-col w-full h-auto px-10 py-20"  >
                  <div  className='mb-4 w-15  '  >
                    <img className='w-full' src={graphicdesignimage}   alt="" />
                  </div>
                  <h1 className='font-bold  text-centr text-xl sm:text-3xl'   >Web Desiging</h1>
                  <p  className=' mt-4  text-center '  >
                  I create visually appealing, user-centric websites that not only look great but also deliver
                   seamless user experiences. 
                  </p>
                </div>
                <div  className=" border-2 border-gray-200 flex justify-center items-center flex-col  w-full h-auto  py-20 px-10"  >
                  <div className='mb-4 w-15' >
                    <img className='w-full' src={brandingimage}   alt="" />
                  </div>
                  <h1 className='font-bold text-center text-xl sm:text-3xl'   >Branding</h1>
                  <p  className='  mt-4  text-center  '  >
                  I help businesses and personal brands create a strong, memorable identity tha
                  t connects with their audience.
                  </p>
                </div>
            </div>
       </div>
    )
}
export default Services