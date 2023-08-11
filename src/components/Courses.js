import React from "react";
// import charging from "../assets/charging3.jpg"

function Courses() {
    return (
        <div className="bg-[#e7f0f7]">
            {/* div 2 */}
            <div className="flex flex-col items-center ">
                <h1 className="text-3xl font-extrabold mt-10 text-black tracking-wide">
                    OUR{" "}
                    <span className="bg-[#2cdc92] h-[50px] w-[170px] text-white rounded-[20px] p-2">
                        COURSES
                    </span>
                </h1>
            </div>
            {/* div3 */}
            <div className="flex flex-row">
                {/* div:3.1 */}

                <div className=" w-full h-screen md:flex flex-col items-center justify-evenly">
                    <div className="flex flex-row items-center">
                        <p>Electric vehichle (Two Weeler)</p>
                    </div>

                    <div className="flex flex-row ">

                        <div className="flex flex-col items-center p-2">
                            <div className="bg-black w-[47px] h-[13px]"></div>
                            <div className="w-[138px] h-[287px] rounded-xl bg-[white] drop-shadow-2xl  origin-bottom-left flex justify-center items-end">
                                <button className="p-2 text-[#2cdc92]">View more</button>

                            </div>

                        </div>
                        <div className="flex flex-col items-center p-2">
                            <div className="bg-black w-[47px] h-[13px]"></div>
                            <div className="w-[138px] h-[287px] rounded-xl bg-[white] drop-shadow-2xl  origin-bottom-left flex justify-center items-end">
                                <button className="p-2 text-[#2cdc92]">View more</button>

                            </div>

                        </div>
                        <div className="flex flex-col items-center p-2">
                            <div className="bg-black w-[47px] h-[13px]"></div>
                            <div className="w-[138px] h-[287px] rounded-xl bg-[white] drop-shadow-2xl  origin-bottom-left flex justify-center items-end">
                                <button className="p-2 text-[#2cdc92]">View more</button>

                            </div>

                        </div>


                        <div className="flex flex-col items-center p-2">
                            <div className="bg-black w-[47px] h-[13px]"></div>
                            <div className="w-[138px] h-[287px] rounded-xl bg-[white] drop-shadow-2xl  origin-bottom-left flex justify-center items-end">
                                <button className="p-2 text-[#2cdc92]">View more</button>
                            </div>

                        </div>


                    </div>
                </div>

                {/* div:3.2 */}
                <div className=" basis-1/3 w-full h-screen  md:flex flex-col items-center justify-evenly">
                    <div className="flex flex-row items-center">
                        <p>Lithium Battery</p>
                    </div>

                    <div className="flex flex-row ">

                        <div className="flex flex-col items-center p-2">
                            <div className="bg-black w-[47px] h-[13px]"></div>
                            <div className="w-[138px] h-[287px] rounded-xl bg-[white] drop-shadow-2xl  origin-bottom-left flex justify-center items-end">
                                <button className="p-2 text-[#2cdc92]">View more</button>

                            </div>

                        </div>


                        <div className="flex flex-col items-center p-2">
                            <div className="bg-black w-[47px] h-[13px]"></div>
                            <div className="w-[138px] h-[287px] rounded-xl bg-[white] drop-shadow-2xl  origin-bottom-left flex justify-center items-end">
                                <button className="p-2 text-[#2cdc92]">View more</button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
}

export default Courses;