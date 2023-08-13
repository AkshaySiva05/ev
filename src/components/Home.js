import React, { useEffect } from 'react'
import { useState } from 'react';
import img from '/home/akshay/first/ev/src/assets/charge.png'

const Home = () => {
    const texts = [
        'First  electric vehicle education center in kerala',
        'Provider of  comprehensive electric vehicle courses',
        'Provider of  Lithium  battery  assembling  courses',
        'Trader  of  lithium  batteries  and  inverters',
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='bg-white h-full relative'>
            <img className="w-[40%] h-auto" src={img} />
            <div className='absolute inset-0 flex flex-col text-center items-center justify-center   '>
                {/* <div className='absolute max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'> */}
                {/* max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'> */}
                <h1 className=' md:text-7xl sm:text-6xl text-4xl font-bold text-purple-300 items-end'>WE ARE THE</h1>
                {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</p> */}
                <div className=''>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold text-green-300'>{texts[currentTextIndex]}</h1>
                </div>
                {/* <div className='flex justify-evenly items-center '>
                    <button className='uppercase bg-green-500 text-gray-950 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get started</button>
                    <button className='uppercase bg-green-500 text-gray-950 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>CONTACT us</button>
                </div> */}

                <div className=" flex justify-center items-center p-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 uppercase">
                        Get started
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
                        CONTACT us
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Home





