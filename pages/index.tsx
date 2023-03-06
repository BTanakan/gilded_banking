import Image from "next/image"
import logo_imges from '../public/logo.png'
import user_images from '../public/Imgespeople.jpg'

export default function Home() {
  return (
    <div className="bg-white h-screen">
    
        <div className=" shadow-md shadow-[#18274b40]  relative bg-gradient-to-b h-48 mx-5 my-5 from-[#EB5F59] to-[#F6B552]">
        <div className=" h-32 w-32 bg-white absolute -top-10 -left-10 rounded-full"></div>
       <div className="shadow-md shadow-[#18274b40] bg-white flex item-center justify-center  h-40 w-40 border-solid  border-2 rounded-full absolute top-2/4 left-24 ">
       <Image
            src={user_images}
            alt="Logo images"
            className="border-solid  border-2 rounded-full w-full h-full"
          >
          </Image>
       </div>
        </div>

      <div className="mx-5 mt-24 ">
        <form action="">
          <div className="mb-4  ">
            <input type="text" className="shadow-md shadow-[#18274b40] border rounded-full   py-2 px-3 w-full placeholder-[#ACACAC] font-bold" placeholder="Email"></input>
          </div>
          <div className="mb-4">
            <input type="text" className=" shadow-md shadow-[#18274b40] border rounded-full py-2 px-3 w-full placeholder-[#F6B552] font-bold" placeholder="* * * * * * * *"></input>
          </div>
          <div className="flex justify-end">
            <a href="#" className=" text-[#EB5F59] mb-4 font-bold">Forgot Password?</a>
          </div>

          <div className="">
            <button className=" text-xl shadow-md shadow-[#18274b40] rounded-full py-2 px-4 w-full text-white font-bold  bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">LOGIN</button>
          </div>
          <div className=" text-center mt-5 mb-5  text-md font-bold text-[#ACACAC]"><span>or</span></div>
          <div className="">
          <button className=" text-xl shadow-md shadow-[#18274b40] rounded-full py-2 px-4 w-full text-white font-bold   bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">SIGN UP</button>
          </div>

        </form>
      </div>

    </div>
  )
}