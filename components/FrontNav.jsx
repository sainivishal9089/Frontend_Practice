import { FaArrowRightLong } from "react-icons/fa6";
const FrontNav = ()=>{

    return(
        <div className="w-full h-16  border-black border-b-2 bg-white  text-[#303030]  flex flex-row   items-center " >
            
                <div className="flex flex-row  ">
                    <a className="font-DM text-[33px] w-96  ml-12 font-black hover:underline tracking-tighter ">Frontend Practice</a>
                </div>
                <ul className="font-Archivo  text-[#303030]  flex flex-row  w-full justify-end pr-12 gap-8 font-semibold  tracking-wide  text-[18px]">
                    <li><a className="hover:underline"  href="">Home</a></li>
                    <li><a className="hover:underline" href="">Projects</a></li>
                    <li><a className="hover:underline" href="">Blog</a></li>
                    <li><a className="hover:underline" href="">FAQ</a></li>
                    <li><a className="hover:underline" href="">Contact</a></li>
                    <li className="hover:underline flex flex-row"   ><a href="" className=" ">Newsletter</a>< FaArrowRightLong className="-rotate-45 text-[6px] hover:underline  mt-1"/> </li>
                </ul>
            
        </div>
    )
}
export default FrontNav;