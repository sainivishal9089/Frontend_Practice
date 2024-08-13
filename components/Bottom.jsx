import { FaArrowRightLong } from "react-icons/fa6"

const Bottom = ()=>{

    return (
        <div className="w-full  flex mt-20 flex-col gap-3 justify-center items-center text-[#dbcaca]  bg-black h-44" >
            <h1 className="text-lg tracking-normal">Frontend Practice - © 2024</h1>
            <ul className="font-Archivo flex flex-row  text-md   gap-3 font-bold  ">
                    <li><a className="hover:underline"  href="">Home</a></li>
                    <li><a className="hover:underline" href="">Projects</a></li>
                    <li><a className="hover:underline" href="">Blog</a></li>
                    <li><a className="hover:underline" href="">FAQ</a></li>
                    <li><a className="hover:underline" href="">Contact</a></li>
                    <li className="hover:underline flex flex-row"   ><a href="">Newsletter</a>< FaArrowRightLong className="-rotate-45 text-[14px] hover:underline  mt-2"/> </li>
            </ul>
        </div>
    )

}
export default Bottom