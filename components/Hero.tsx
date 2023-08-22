'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'
import { useEffect } from 'react'
import { ImageSlideshow } from '.';

const Hero = () => {

    const [progress, setProgress] = useState(0);

  // Simulate progress increase over time
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

    return (
        <div className='hero'>
            <div className='bg-white flex-1 mt-11 rounded-xl p-4 drop-shadow-lg'>
                <h1 className='text-3xl font-semibold'>Project title</h1>
                <div className='flex justify-between'>
                    <div className='rounded-xl overflow-hidden mt-8'>
                        <ImageSlideshow/>
                    </div>
                    <div className="ml-5 mt-6 flex-1 justify-center mr-5">
                        <h2 className="text-xl font-semibold">Goal</h2>
                        <progress className="w-full h-2 bg-gray-300 rounded-full overflow-hidden" value={progress} max={100} />
                        <h2 className='text-xl font-semibold mt-4'>8</h2>
                        <h4 className='text-xs font-medium text-gray-500'>Donors</h4>
                        <h2 className='text-xl font-semibold mt-4'>23</h2>
                        <h4 className='text-xs font-medium text-gray-500'>Days to go</h4>
                        <button
                            className='bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 mt-4'
                        >
                            Donate now
                        </button>
                        <Link href={"/remind"} className='text-md hover:text-gray-300 ml-6'>
                            Remind me
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-white flex-1 mt-10 rounded-xl p-4 drop-shadow-lg'>
                <h2 className='text-xl font-semibold'>Story</h2>
                <p className='mt-4 font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                    euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet
                    erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus
                    volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu
                    enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                </p>
            </div>
            <div className='bg-white flex-1 mt-10 mb-11 rounded-xl p-4 w-1/2 drop-shadow-lg'>
                <div className="flex rounded-xl p-0 dark:bg-zinc-950">
                    <Image
                        src={"/images/dummy-profile.jpg"}
                        alt="Profile picture"
                        className='rounded-xl'
                        width={250}
                        height={200}
                        layout='auto'
                    />
                    <div className='pt-6 md:p-8 text-left space-y-4'>
                        <h2 className='text-xl font-semibold'>Organizer</h2>
                        <div className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                D.B Jayaweera
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                Colombo
                            </div><div className="text-slate-700 dark:text-slate-500">
                                abc@gmail.com
                            </div>
                            <button
                                className='bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 mt-4'
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero