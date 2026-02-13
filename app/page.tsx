'use client'

import Image from "next/image";
import TestAnimation from "./components/testAnimation"
import React, { useRef, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function Home() {

 
          
    useEffect(() => {
      window.scrollTo(0, 0); 

  
   
 
        // const listener = (e: any) => {
        //     if (ref.current != null) {
        //         if (!ref.current.contains(e.target)) {
        //             // setShowOptions(false)
        //             // setCursor(-1)
        //         }
        //     }

        // };

        // document.addEventListener('click', listener)
        // document.addEventListener('focusin', listener)
        // return () => {
        //     document.removeEventListener('click', listener);
        //     document.removeEventListener('focusin', listener);
        // }
    }, []);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      

      <div className='fixed flex justify-center items-end h-screen  w-screen z-0 '>
      <Image
                                            src={`/New Project.png`}
                                            // loader={imageLoader}
                                           
                                           quality={100}
                                            alt="Picture"
                                            fill    
                                            objectFit='cover'   
            className="   my-image-sm opacity-10  "
                                           
                                        />
       <DotLottieReact
      src="Mouse Scroll Down.json"
      loop
      autoplay
      className='w-64  mb-10 opacity-20'
    />
      </div>
    <TestAnimation/>
    
    </div>

    // </main>
  )
}
