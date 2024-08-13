// import logo from '../src/assets/images.globe.png'


// eslint-disable-next-line react/prop-types
const Box = ({content ,imageUrl })=>{
    return(
        <div className="flex flex-row border-2 mr-2 items-center border-black gap-4 w-[450px] h-[150px] px-3 ">
            <div className=" px-2 "><img src={imageUrl} alt="globe" className="w-28" /></div>
            <div className="px-2"><pre className="text-lg font-Archivo text-center">{content}</pre></div>
        </div>
    )


}
export default Box