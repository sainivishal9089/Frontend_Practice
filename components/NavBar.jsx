import { FaCode } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
const NavBar = () => {
    return (
          <div className="w-screen h-screen   bg-[#7fb5b8] flex flex-col items-center justify-center ">

            <div className="w-[420px] h-6 bg-white flex flex-row items-center gap-[1px]  ">
            <FiCircle className="bg-red-600 text-xs ml-4   overflow-hidden rounded-full border-red-800" />
            <FiCircle className="bg-yellow-500  text-xs  overflow-hidden rounded-full border-red-800" />
            <FiCircle className="bg-green-600  text-xs  overflow-hidden rounded-full border-red-800" />
                
            
            </div>
            <div className="w-[420px] h-56 bg-[#3b4646]">
            <span className="pt-3" >< FaCode  className="text-3xl tracking-wider  font-light mx-8 mt-4  text-sky-500"/></span>
                <div ><h1 className="text-white mx-16 mt-3  text-3xl font-bold">Hi! I&apos;m a Front-End</h1>
                <h1 className="text-white mx-16 text-3xl font-bold">Developer</h1></div>
                
                <button className=" mx-16 mt-3 uppercase px-7 py-1 bg-red-400 text-lg text-white font-bold" >My project</button> </div>
          </div>
           
        

    )
} 
export default NavBar ;