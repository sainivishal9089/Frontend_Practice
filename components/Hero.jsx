import Box from "./Box";
import Button from "./Button";

const Hero = ()=>{
    return (

        <div className="mt-20 flex flex-col w-full gap-24">
            <div className="flex flex-col items-center gap-10 " >
                <h1 className="text-[40px] leading-10  text-center font-DM font-black tracking-tight "><b> Frontend Practice provides you with the <br /> inspiration and resources to create <br /> beautiful websites. </b></h1>
                <pre className="font-Archivo text-center  text-[28px] tracking-wide
                leading-[32px] font-normal text-[#303030]">Here are some ways you can benefit
                    <br />from using our platform:</pre>
            </div>
            <div className="flex flex-row flex-wrap px-18  gap-6 justify-center items-center    "  >
            <Box content ="Enhance your skills by building real 
    websites selected for their
     educational value." imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfVHMiL3xSeUr5YGK49oUSlGZfzXQlm4da9TfUWf57T9Cdj7z" />
     <Box
      content ="Test and improve your frontend
      knowledge through various 
     challenges."
     imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3KZrpfVoDcOoMX3LOzC2DGHIKyt7SFpwsS7x0jTWiBr7kIX4W"
      />
      <Box
      content="Use the provided color palettes for
       each project to save time."
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRAGRM57JrjTp0Rzk-PiLCiaqcbNz00J0NrVLF6pxxTCzKtH5"
      /> 
      <Box
      content="Find helpful, curated resources to 
      tackle challenging elements."
      imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7bGMNeIV8rBKBci2R99GxH0ctMvFGHKAysmkvTliwsed3oi_N"
      /> 

            </div>
            <div className="flex flex-col items-center justify-center gap-10">
                <h1  className="text-[40px] leading-10  text-center font-DM font-black tracking-tight " >Ready to become a better <br /> frontend developer?</h1>
                <Button  content="Get Started"/>
            </div>
        </div>
    )
}
export default Hero;