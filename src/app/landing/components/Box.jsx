import React from "react";

const Box = () => {
  const stages = ["Data Collection", "Data Processing", "Data Annotation", "Provide Quality & Inclusive Data"];

  return (
    <div className="my-10 flex border  border-[#095FAF] justify-center items-center flex-row w-full max-w-[69%] mx-auto">
      <div className="py-8">
        <h1 className="md:text-[30px] text-white px-10 font-semibold text-center text-[27px]">
          Covering important stages for building responsible <br /> AI solutions
        </h1>
        <div className="flex justify-between items-center py-8 mt-4">
          <div className="w-full h-[1px] bg-[#40A9EB] relative">
            <div className="absolute top-[-6px] left-0 right-0 flex justify-between">
              {stages.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="w-2 h-2 bg-white rounded-full inline-block -pt-9"></div>
                  <p className="text-white text-center -mt-1">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
