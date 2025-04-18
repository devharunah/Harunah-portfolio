import { useNavigate } from "react-router-dom"
const Notfound = ()=>{
    const handlenav = ()=>{
        navigate('/')
    }
    const navigate = useNavigate()
   return(
    <div className="w-full bg-black text-white h-screen "   >
        <div  className="flex flex-col  pt-30  items-center justify-center"  >
        <h1 className="font-bold text-6xl"  >404</h1>
            <h1  className="font-semibold text-2xl   "  >Oops,Page not found.</h1>
            <p className="w-90 mt-2 max-sm:text-center " >The page you’re looking for doesn’t exist, was
                 moved, or never existed in the first place.</p>
                 <button onClick={handlenav} className="bg-blue-700 cursor-pointer text-white border-0 outline-0 px-6 rounded-md mt-2 py-1"   >Go back</button>
        </div>
      
    </div>
   )
}
export default Notfound