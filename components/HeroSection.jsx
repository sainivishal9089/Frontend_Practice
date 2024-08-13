    import Button from './Button'

const HeroSection = ()=>{

    return(
        <div className="bg-[#faebd7]   flex justify-around pt-28 flex-row h-[700px]  border-b-2 border-black px-10  w-full">
            <div  className="w-[500px]"  >
                <h1 className="text-6xl font-DM font-extrabold tracking-tighter ">Become a better
                     frontend developer.</h1>
                <pre className="mt-4 text-2xl font-Archivo font-medium ">Take your frontend skills to the next level by 
                    <br />recreating <b>real websites</b> from <b>real companies.</b>
                    <br /><br />
                    The perfect type of practice for developers of all
                    <br/> 
                    skill levels. Are you up for the challenge?</pre>
                    <div className='flex flex-row justify-start gap-6 px-28 object-cover h-10    mt-10 '>
                        < Button  content="View Project" />
                        < Button content="Learn More" />
                    </div>
            </div>
            <div>
                <img src="https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=1200&q=100" className="w-[700px]" alt="" /></div>
        </div>
    )

}
export default HeroSection;