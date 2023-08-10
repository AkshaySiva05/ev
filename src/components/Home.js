import React from 'react'
import img from '/home/akshay/first/ev/src/assets/vehicle.jpg'

function Home() {
    return (
        <div class="flex items-center justify-center mt-12">


            <img class="absolute inset-0 object-cover w-full h-full group-hover:opacity-60"
                src={img} />
            <a class="relative block w-full h-full items-center group  "
                href="##">
                <div class="relative p-5">
                    <div class="mt-40">
                        {/* Hidden content */}
                        <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            <div class="p-2">
                                <h1 class="text-lg text-white">
                                    Smart Charger For Your
                                </h1>
                                <h1 class="text-lg text-white">
                                    Electric Vechile etter
                                </h1>
                                <p className='text-white'>yrthdrtftytj</p>
                                <button class="px-4 py-2 text-sm
                                text-white bg-green-600 rounded-full">
                                    Get Started
                                </button>
                                <button class="px-4 py-2 text-sm
                                text-white bg-green-600 rounded-full">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                        {/* End of hidden content */}
                    </div>
                </div>
            </a>
        </div>
    );
}


export default Home