import React from 'react'


const Navbar = () => {
  return (

      <div className="flex gap-20 justify-evenly items-center h-16 px-10 py-12 bg-transparent z-20">
        <div className=" text-4xl bg-gradient-to-tr text-gradient bg-clip-text text-transparent font-extrabold">
          LEYU
        </div>
        <ul className="flex gap-10 text-white text-lg font-bold ml-20">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        <button className="px-6 py-[5px] rounded-md font-semibold text-md border border-gray-600 text-[#02C27D] bg-slate-900">
          Register
        </button>
      </div>

  );
}

export default Navbar