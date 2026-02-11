'use client'

import Image from "next/image";
import TestAnimation from "./components/testAnimation"
import React, { useRef, useEffect } from 'react';

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
    <TestAnimation/>
    
    // </main>
  )
}
