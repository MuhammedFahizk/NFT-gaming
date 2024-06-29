import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Left from "./Left";
import Right from "./Right";
const Hero = () => {
    const links = [
        'Marketplace',
        'Explore',
        'Artists',
        'Collections'
    ]
  return (
<div className=" ">
    <div className="flex justify-between md:px-20">
        <h1 className="text-3xl h-40  font-extrabold p-4 text-center   from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">NFT LOARD</h1>
        <div className="md:block hidden">
            {
                links.map((item, index) => (
                    <a href="#" key={index} className="text-white text-xl  font-thin p-4 hover:text-blue-
                    600">{item}</a>
                ))
            }
        </div>
        <div className="flex gap-3 py-6  justify-center h-fit items-center" >
            <div className="flex  border-white border-2  rounded-lg p-1">
            <CiSearch className="text-white text-2xl" />
            <input type="text" className="w-36 md:block hidden bg-black" />

            </div>
            <div className="bg-red-500 p-1 rounded-full" >
            <CiUser  className="text-3xl" />
            </div>
        </div>
    </div>
    <div className="text-white md:flex    justify-between md:p-20">
            <Left />
            <Right />

    </div>
    </div>
  )
}

export default Hero