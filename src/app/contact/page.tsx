// /* eslint-disable @next/next/no-img-element */
// export default function Page() {
//   return (
//     <div className="">
//       <div className="flex flex-col lg:flex-row gap-10 items-center justify-between max-w-[100%] px-[5%] m-auto pt-[10%] bg-[#090909] ">
//         <div className="flex flex-col gap-8 justify-center z-10 ">
//           <h2 className="text-[3rem] text-wrap max-w-[70%] font-bold">
//             We Would Love To Talk With You
//           </h2>
//           <div className="font-light">
//             <p>For General Enquiries</p>
//             <p>info@leyu.com</p>
//           </div>
//         </div>
//         <div className="relative">
//           <div className="absolute inset-0 flex justify-center items-center z-10">
//             <img
//               src="./Ellipse 5.svg"
//               alt="glow"
//               className="right-30 top-20 " /* Adjust size and opacity */
//             />
//           </div>

//           <div className="grid grid-cols-1 grid-rows-1 gap-5   text-white justify-center items-start border-[0.2px] border-[#02C27DCC] px-[5rem] py-[2rem] font-normal z-20">
//             <p className="font-semibold">Get in Touch</p>
//             <div className=" text-white flex gap-4 ">
//               <input
//                 type="text"
//                 id="Firstname"
//                 placeholder="First Name"
//                 className=" w-full rounded-sm pl-4 py-3  bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
//               />

//               <input
//                 type="text"
//                 id="Lastname"
//                 placeholder="Last Name"
//                 className="w-full rounded-sm pl-4 py-3  bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
//               />
//             </div>
//             <div className="w-full">
//               <input
//                 type="text"
//                 id="Email"
//                 placeholder="Email"
//                 className="rounded-sm w-full pl-4 py-3  bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
//               />
//             </div>

//             <div className="flex justify-between gap-5 ">
//               <select
//                 name="country"
//                 id="country"
//                 className="pr-6 rounded-sm max-w-[20%]  px-4 py-3  bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
//               >
//                 <option value="country">Country</option>
//                 <option value="india">India</option>
//                 <option value="usa">USA</option>
//               </select>
//               <input
//                 type="text"
//                 id="Phonenumber"
//                 placeholder="934567898"
//                 className="rounded-sm w-full pl-4 py-3  bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Message"
//                 className="rounded-sm w-full pl-4 py-3  bg-[#02C27D] bg-opacity-10 border-[0.1px] border-opacity-80 border-[#02C27DCC]"
//               ></textarea>
//             </div>
//             <div className="flex flex-row-reverse">
//               <div className=" w-1/2 bg-[#095FAF] p-7 py-2 text-center  items-end rounded-md">
//                 <button className="">Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
/* eslint-disable @next/next/no-img-element */

export default function Page() {
  return (
    <div className="max-lg:pt-10">
      {/* Form Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between  pt-[10%] px-10  ">
        <div className="flex flex-col gap-8 justify-center z-10 ">
          <h2 className="text-[3rem] text-wrap  font-bold">
            We Would Love To Talk With You
          </h2>
          <div className="flex flex-col gap-2 font-light">
            <p>For General Enquiries</p>
            <div className="flex gap-2">
              <img src="./mage_email.svg" alt="email" />
              <p>info@leyu.com</p>
            </div>
          </div>
        </div>

        <div className="relative z-20">
          {" "}
          {/* Add z-20 to keep it above other elements */}
          {/* Ellipse Background */}
          {/* Form Container */}
          <div className="grid grid-cols-1 grid-rows-1 gap-5 text-white justify-center items-start border-[0.2px] border-[#02C27DCC] px-[5rem] max-lg:px-[1rem] py-[2rem] font-normal z-40 relative">
            <p className="font-semibold">Get in Touch</p>
            <div className=" text-white flex gap-4 ">
              <input
                type="text"
                id="Firstname"
                placeholder="First Name"
                className="w-full rounded-sm pl-4 py-3 bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
              />

              <input
                type="text"
                id="Lastname"
                placeholder="Last Name"
                className="w-full rounded-sm pl-4 py-3 bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                id="Email"
                placeholder="Email"
                className="rounded-sm w-full pl-4 py-3 bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
              />
            </div>

            <div className="flex justify-between gap-5 ">
              <div className="flex gap-1 items-center">
                {/* <select
                name="country"
                id="country"
                className="pr-6 rounded-sm max-w-[20%] px-4 py-3 bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
              > */}
                <img
                  src="./Group 55456.svg"
                  alt="ethiopia"
                  className="w-10 h-10"
                />
                {/* </select> */}
                <p>+251</p>
              </div>

              <input
                type="text"
                id="Phonenumber"
                placeholder="934567898"
                className="rounded-sm w-full pl-4 py-3 bg-[#02C27D] bg-opacity-10 border-[0.3px] border-opacity-80 border-[#02C27DCC]"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="rounded-sm w-full pl-4 py-3 bg-[#02C27D] bg-opacity-10 border-[0.1px] border-opacity-80 border-[#02C27DCC]"
              ></textarea>
            </div>
            <div className="flex flex-row-reverse">
              <div className="w-1/2 bg-[#095FAF] p-7 py-2 text-center items-end rounded-md">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" absolute left-[50rem] top-37    z-20 border-2 border-black"> */
}
{
  /* <img
  src="./Ellipse 5.svg"
  alt="glow"
  className="max-w-[80%] h-[90%]  opacity-100   rotate-custom " /* Adjust opacity and positioning */
  /> */;
}
// </div>
