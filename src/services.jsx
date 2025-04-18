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
            <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-col  px-15 py-10  max-xsm:px-10 items-center"  >
            <div  className=" border-2 flex justify-center items-center flex-col  w-full h-80 max-xsm:h-full max-xsm:py-8  rounded-md border-blue-950"  >
                  <div className='mb-4'   >
                    <img className='w-16 max-xsm:w-12   ' src={webdevimage}   alt="" />
                  </div>
                  <h1 className='font-bold text-3xl'   >Web Development</h1>
                  <p  className='w-100 mt-4  max-xsm:w-70 text-center '  >
                  I specialize in designing and developing responsive, user-friendly websites using modern
                   front-end technologies like React.js and Tailwind CSS. From landing pages to full web applications, 
                   I focus on clean, maintainable code and visually engaging
                   interfaces that work seamlessly across devices.
                  </p>
                </div>
                <div  className=" border-2 flex justify-center items-center flex-col  w-full h-80 max-xsm:h-full rounded-md max-xsm:py-8 border-blue-950"  >
                  <div className="mb-4"   >
                    <img className='w-16 max-xsm:w-12' src={webdesignimage}   alt="" />
                  </div>
                  <h1 className='font-bold text-3xl'   >Graphic Design</h1>
                  <p  className='w-100  mt-4  max-xsm:w-60 text-center '  >
                  As a graphic designer, I combine creativity with functionality to produce designs that
                   communicate your message clearly and effectively. Whether it’s brand identities, marketing 
                   materials, or web graphics,
                   I create visuals that leave a lasting impression.
                  </p>
                </div>
                <div  className=" border-2 flex justify-center items-center flex-col w-full h-80  max-xsm:h-full rounded-md max-xsm:py-8 border-blue-950"  >
                  <div  className='mb-4'  >
                    <img className='w-16' src={graphicdesignimage}   alt="" />
                  </div>
                  <h1 className='font-bold text-3xl'   >Web Desiging</h1>
                  <p  className='w-100  mt-4 max-xsm:w-50 text-center '  >
                  I create visually appealing, user-centric websites that not only look great but also deliver
                   seamless user experiences. My approach combines design aesthetics with functionality,
                    ensuring your website is not only
                   beautiful but also intuitive and easy to navigate.
                  </p>
                </div>
                <div  className=" border-2 flex justify-center items-center flex-col  w-full h-80  max-xsm:h-full  rounded-md max-xsm:py-10 border-blue-950"  >
                  <div className='mb-4' >
                    <img className='w-16' src={brandingimage}   alt="" />
                  </div>
                  <h1 className='font-bold text-3xl'   >Branding</h1>
                  <p  className='w-100  mt-4  max-xsm:w-50 text-center  '  >
                  I help businesses and personal brands create a strong, memorable identity tha
                  t connects with their audience. From logos to brand guidelines, I design visual 
                  systems that reflect your values, style, and story.
                  </p>
                </div>
            </div>
       </div>
    )
}
export default Services