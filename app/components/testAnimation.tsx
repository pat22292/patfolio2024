'use client'
// import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin'
// 
import Image from 'next/image';


import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from './header';
import { Progress } from "flowbite-react";
import { Button } from 'flowbite-react';
import ScrollCarousel from '../components/carousel';
import Link from 'next/link';

// const runTyping = () => {
//   var tl = gsap.timeline({
//     paused:true
//   });
//   // letter animation
//   tl.fromTo(".anim-typewriter", 8, {
//     width: "0",
//   }, {
//     width: "20.18em", /* same as CSS .line-1 width */
//     ease:  SteppedEase.config(37)
//   }, 0);
//   // text cursor animation
//   tl.fromTo(".anim-typewriter", 0.5, {
//     "border-right-color": "rgba(255,255,255,0.75)"
//   }, {
//     "border-right-color": "rgba(255,255,255,0)",
//     repeat: -1,
//     ease:  SteppedEase.config(37)
//   }, 0);
  
//   tl.play();
// }

const TestAnimation = () => {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    
    const ref = useRef<HTMLInputElement>(null);
    const container = useRef();


  
  
//     useEffect(() => {
//       window.scrollTo(0, 0); 
// gsap.to(window, { duration: 0, scrollTo: 0, overwrite: true });
  
   
 
//         // const listener = (e: any) => {
//         //     if (ref.current != null) {
//         //         if (!ref.current.contains(e.target)) {
//         //             // setShowOptions(false)
//         //             // setCursor(-1)
//         //         }
//         //     }

//         // };

//         // document.addEventListener('click', listener)
//         // document.addEventListener('focusin', listener)
//         // return () => {
//         //     document.removeEventListener('click', listener);
//         //     document.removeEventListener('focusin', listener);
//         // }
//     }, []);

    useGSAP(
        () => {
            // gsap code here...
             // --- RED PANEL ---
    
  

          
          // --- ORANGE PANEL ---
          gsap.from(".line-2", {
            scrollTrigger: {
              trigger: ".orange",
              scrub: true,
              pin: true,
              start: "top top",
              end: "+=1050%"
            },
            scaleX: 0, 
            transformOrigin: "left center", 
            ease: "none",
            stagger: 1
          });
          gsap.from(".line-2SM", {
            scrollTrigger: {
              trigger: ".orangeSM",
              scrub: true,
              pin: true,
              start: "center center",
              end: "+=1100%"
            },
            scaleX: 0, 
            transformOrigin: "left center", 
            ease: "none",
            stagger: 1
          });
              gsap.to('.greetext', {
       scrollTrigger: {
             
              trigger: ".greetext",
             
              scrub: true,
              // pin: true,
              start: "top top",
            },
            duration: 500,
            text: "I can be your",
            stagger: 1
          });

               gsap.to("#typeWriterText", {
            scrollTrigger: {
             
              trigger: "#typeWriterText",
              toggleClass: "-translate-x-1/2",
              scrub: true,
              // pin: true,
              // start: "+0%",
            },
            duration: .05,
            ease: "slow",
            stagger: 1
          });

 

          gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: "+1000%",
              end: "+=200%"
            },
            duration:.01,
            text: " Designer.",
            ease: "power2",
            stagger: 1
          });

          
          gsap.to(".my-image", {
            scrollTrigger: {
              trigger: ".my-image",
              scrub: true,
              // pin: true,
              start: "+100%",
              end: "+=250%"
            },
            // duration: .05,
            // opacity: 100
           duration: 200,
                     attr:{
            src: "https://raw.githubusercontent.com/pat22292/PatrickPortfolio/4e540f4aa84c7e4f83277755f7f1f5a6f47d5417/assets/svg/3d3.svg" 
           }, 
  autoAlpha: 1, // Combines opacity and visibility for better performance
  ease: "power2",
            stagger: 1
            // transform: "rotate(30deg)",
            // transformOrigin: "0 0"
          });
          
          gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: "+=3000%",
              end: "+=200%"
            },
            duration:.1,
            text: " Web/API Dev.",
            ease: "power2",
            stagger: 1
          });
           gsap.to(".my-image", {
            scrollTrigger: {
              trigger: ".my-image",
              scrub: true,
              // pin: true,
              start: "+=395%",
              end: "+=395%"
            },
            // duration: .05,
            // opacity: 100
           duration: 200, 

           attr:{
            src: "/dev.svg" 
           },
            autoAlpha: 1, // Combines opacity and visibility for better performance
            ease: "power2.InOut"
            // transform: "rotate(30deg)",
            // transformOrigin: "0 0"
          });
                    
          

          gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: "+=4600%",
              end: "+=50%"
            },
            duration:.1,
            text: " Mobile Dev.",
            ease: "none",
          });

          gsap.to(".professionalSec",{
            scrollTrigger:{
              trigger: ".progressB",
              scrub: true,
            start: "top top",
              end: "+=100%"
              
            },
            ease: "none",
            duration: 1,
            transformOrigin: "left center"
          })

                  gsap.to(".my-image", {
            scrollTrigger: {
              trigger: ".my-image",
              scrub: true,
              // pin: true,
              start: "+=700%",
              end: "+=700%"
            },
            // duration: .05,
            // opacity: 100
           duration: 200, 

           attr:{
            src: "/van-shadowed.svg" 
           },
            autoAlpha: 1, // Combines opacity and visibility for better performance
            ease: "power2.InOut"
            // transform: "rotate(30deg)",
            // transformOrigin: "0 0"
          });

          gsap.to(".textKoSM", {
            scrollTrigger: {
              trigger: ".textKoSM",
              scrub: true,
              // pin: true,
              start: "+1000%",
              end: "+=200%"
            },
            duration:2,
            text: " Designer.",
            ease: "power2",
          });
    
          
          gsap.to(".textKoSM", {
            scrollTrigger: {
              trigger: ".textKoSM",
              scrub: true,
              // pin: true,
              start: "+=6000%",
              end: "+=300%"
            },
            duration:2,
            text: " Web/API Dev.",
            ease: "power2",
          });
                    
          gsap.to(".textKoSM", {
            scrollTrigger: {
              trigger: ".textKoSM",
              scrub: true,
              // pin: true,
                start: "+=9000%",
              end: "+=200%"
            },
            duration:2,
            text: " Mobile Dev.",
            ease: "none",
          });

                    
             var tlCarousel = gsap.timeline({
              scrollTrigger: {
                trigger: ".carousel",
                
                scrub: true,
                pin: true,
                start: "top top",
                end: "150%"
              },
             
            ease: "slow",
            stagger: 1
            });
               tlCarousel.from(".carousel", {translateX: "-100%", duration: 500, stagger: 1},0)
            .to(".carousel", {translateX: 0, duration: 2500, stagger: 1}, 1);


            
          // gsap.from(".line-1", {
          //   scrollTrigger: {
          //     trigger: ".red",
          //     scrub: true,
          //     pin: true,
          //     start: "top top",
          //     end: "+=400%"
          //   },
          //   scaleX: 0,
          //   transformOrigin: "left center", 
          //   ease: "none",
          //   stagger: 1
          // });
          
              var tlCarousel2 = gsap.timeline({
              scrollTrigger: {
                trigger: ".carousel2",
                
                scrub: true,
                pin: true,
                start: "top top",
                end: "150%"
              },
             
            ease: "slow",
            stagger: 1
            });
               tlCarousel2.from(".carousel2", {translateX: "+100%", duration: 500, stagger: 1},0)
            .to(".carousel2", {translateX: "-50%", duration: 1500, stagger: 1}, 1);

          // --- PURPLE/GREEN PANEL ---
          var tl = gsap.timeline({
              scrollTrigger: {
                trigger: ".purple",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=100%"
              }
            });
          
          tl.from(".purple span", {scale: 0.3,  translateX: -100, autoAlpha: 0, ease: "power2"})
            .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
            // .to(".purple", {backgroundColor: "#28a92b",  stagger: 1}, 1);
          
     
          
          // tlCarousel.from(".purple span", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
          //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
          //   .to(".purple", {backgroundColor: "#28a92b",  stagger: 1}, 1);

          var tlImg = gsap.timeline( {
            scrollTrigger: {
              trigger: ".my-image",
              scrub: true,
              pin: true,
              start: "+=100%",
              end: "+=0%"
            },
              transformOrigin: "left center"
          });
          tlImg.from(".my-image",{ stagger: 1})
          .to(".my-image", { stagger: 1})
          

          tlImg.to(".orange", { ease: "slow", duration: ".2",  stagger: 1}, 1)
          

          
          // var tlImgs = gsap.timeline( {
          //   scrollTrigger: {
          //     trigger: ".my-image",
          //     scrub: true,
          //     pin: true,
          //     start: "+=2100%",
          //     end: "+=0%"
          //   },
          //   transformOrigin: "left center"
          // });
          // tlImgs.from(".my-image",{ stagger: 1})
          // .to(".my-image", { stagger: 1})
          

          // tlImgs.to(".orange", { ease: "slow", duration: ".2",  stagger: 1}, 1)
          
          // possible solution for old iOS bugs that don't display things inside an iframe correctly. Create a --full-height CSS variable and use it instead of height: 100%
          // function readHeight() {
          // 		if (ScrollTrigger.isScrolling()) {
          // 			console.log("wait until end...");
          // 			ScrollTrigger.addEventListener("scrollEnd", readHeight);
          // 		} else {
          // 			ScrollTrigger.removeEventListener("scrollEnd", readHeight);
          // 			window.removeEventListener("resize", readHeight);
          // 			let scrollFunc = ScrollTrigger.getScrollFunc(window),
          // 				scrollProgress = scrollFunc() / ScrollTrigger.maxScroll(window),
          // 				docStyle = document.documentElement.style,
          // 				bodyStyle = document.body.style;
          // 			bodyStyle.overflow = "auto";
          // 			docStyle.setProperty("--full-height", "100%");
          // 			docStyle.setProperty("--full-height", window.innerHeight + "px");
          // 			bodyStyle.overflow = "unset";
          // 			setTimeout(function() {
          // 				window.addEventListener("resize", readHeight);
          // 			}, 500);
          // 			ScrollTrigger.refresh(true);
          // 			scrollFunc(scrollProgress * ScrollTrigger.maxScroll(window));
          // 		}
          // 	}  
        },
        { scope: ref }
    ); 

return(
    <>
    <div  ref={ref}>
      <Navbar/>
             


    <section className="panel orange text-gray-900 md:grid md:grid-cols-2 hidden h-screen justify-center items-center -z-30 ">
     
      <div className='text-center  md:col-span-1 col-span-1   flex items-center justify-center'>
        {/* <Image
                                            src="file.svg"
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className="w-96 my-image opacity-0"
                                        /> */}
      <Image
                                            src={`https://raw.githubusercontent.com/pat22292/PatrickPortfolio/4e540f4aa84c7e4f83277755f7f1f5a6f47d5417/assets/svg/3d3.svg`}
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className=" p-12 w-full my-image opacity-0"
                                        />
      </div>
  <div id='typeWriterText' className='text-center transition-transform duration-300 ease-in-out  -translate-x-1/2  md:col-span-1 col-span-1   content-center place-items-center h-screen justify-center items-center  '>

    <div className='whole-text  h-screen flex items-center justify-center  '>
    
      <h1 className='text-8xl font-akshar  font-extrabold  drop-shadow-xl md:inline-block hidden'>
        <span className="greetext font-akshar text-8xl font-extrabold "> Hi! I'm Patrick.</span>
         <span className="textKo font-akshar text-8xl font-extrabold ">  </span>
      <span className="blinking-cursor">|</span>
      </h1>
    

      {/* <h1 className='text-2xl font-extrabold drop-shadow-xl md:hidden inline-block '>Hi, I can be a  
        
        <span className="textKoSM text-2xl font-extrabold">  </span>
     <span className="blinking-cursor">|</span>
     </h1> */}

    </div>
    <span className="line line-2  "></span>
     <div className='md:flex col-span-1 hidden flex-col h-screen justify-center items-center  mx-32'>
    
   
    {/* <span className=' '>


    This orange panel gets pinned when its top edge hits the top of the viewport, then the line's animation is linked with the scroll position until it has traveled 100% of the viewport's height (<code>end: "+=100%"</code>), then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set <code>pinSpacing: false</code> to prevent that if you prefer.
    </span> */}
    </div> 
    </div>
  </section>
  

  <section className="panel row orangeSM  md:hidden  h-screen ">
    
  <div className='text-center content-center place-items-center '>
      <Image
                                            src={`https://raw.githubusercontent.com/pat22292/PatrickPortfolio/4e540f4aa84c7e4f83277755f7f1f5a6f47d5417/assets/svg/3d3.svg`}
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className="h-auto w-96 my-image-sm opacity-0"
                                        />
  <span className="line line-2SM col-span-1 h-screen  "></span>
    <div className='text-black '>
    
      {/* <h1 className='text-5xl font-extrabold drop-shadow-xl'>Hi, I can be a  
        
         <span className="textKo text-5xl font-extrabold">  </span>
      <span className="blinking-cursor">|</span>
      </h1> */}
     <div className='text-center  md:col-span-1 col-span-1  flex items-center justify-center'>
    
      </div>

      <h1 className='text-5xl text-black font-extrabold drop-shadow-xl md:hidden inline-block '>
        <span className="textKoSMFirst text-5xl font-extrabold">Hi, I can be a  </span>
        <span className="textKoSM text-5xl font-extrabold"></span>
     <span className="blinking-cursor-sm ">|</span>
     </h1>

    </div>

    </div>
  </section>
 
    <section className="flex items-center justify-center sm:h-screen  py-5  description panel blue text-center  professionalSec z-40">
      {/* <Image
                                            src={`/cb.png`}
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className=" w-screen h-screen absolute opacity-10 z-10"
                                        /> */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   ">
    <h2 className="font-akshar text-4xl font-extrabold text-gray-900 text-center mb-10 ">Professional Skills</h2>
    
   
    <div className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-patcolor mb-4">
       
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 z-50">Web Development</h3>
        {/* <p className="text-gray-600 mt-2">NextJS, Tailwind CSS, GSAP</p> */}

               <Progress
                className='progressB '
                progress={80}
                progressLabelPosition="outside"
                textLabel="Wordpress"
                textLabelPosition="outside"
                color='dark'
                size="lg"
                labelProgress
                labelText
              />
                 <Progress
                className='progressB'
                progress={60}
                progressLabelPosition="outside"
                textLabel="NextJS"
                textLabelPosition="outside"
                  color='dark'
                size="lg"
                labelProgress
                labelText
    />
              <Progress
              className='progressB'
      progress={40}
      progressLabelPosition="outside"
      textLabel="GSAP"
      textLabelPosition="outside"
      size="lg"
         color='dark'
      labelProgress
      labelText
    />
      </div>
      
  
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-patcolor mb-4">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Backend API</h3>
        {/* <p className="text-gray-600 mt-2">Node.js, Laravel, SQL</p> */}
          <Progress
          className='progressB'
      progress={70}
      progressLabelPosition="outside"
      textLabel="Laravel"
      textLabelPosition="outside"
      color='dark'
      size="lg"
      labelProgress
      labelText
    />
                 <Progress
                 className='progressB'
    
      progress={40}
      progressLabelPosition="outside"
      textLabel="Asp.net"
      textLabelPosition="outside"
      color='dark'
      size="lg"
      labelProgress
      labelText
    />
              <Progress
              className='progressB'
  
      progress={30}
      progressLabelPosition="outside"
      textLabel="NextJS"
      textLabelPosition="outside"
      size="lg"
         color='dark'
      labelProgress
      labelText
    />
      </div>
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-patcolor mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
</svg>

        </div>
        <h3 className="text-xl font-semibold text-gray-800">Design</h3>
        {/* <p className="text-gray-600 mt-2">Node.js, Laravel, SQL</p> */}
          <Progress
          className='progressB'
      progress={85}
      progressLabelPosition="outside"
      textLabel="Photoshop"
      textLabelPosition="outside"
      color='dark'
      size="lg"
      labelProgress
      labelText
    />
                 <Progress
                 className='progressB'
    
      progress={65}
      progressLabelPosition="outside"
      textLabel="Illustrator"
      textLabelPosition="outside"
         color='dark'
      size="lg"
      labelProgress
      labelText
    />
              <Progress
              className='progressB'
  
      progress={30}
      progressLabelPosition="outside"
      textLabel="Figma"
      textLabelPosition="outside"
      size="lg"
         color='dark'
      labelProgress
      labelText
    />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-patcolor mb-4">
<svg  className=' w-16' viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.05677 2.33758C3.92904 2.33758 3.82353 2.23484 3.82353 2.10711C3.82353 1.97938 3.92904 1.87942 4.05677 1.87942C4.1845 1.87942 4.29001 1.97938 4.29001 2.10711C4.29001 2.23484 4.1845 2.33758 4.05677 2.33758ZM1.5022 2.33758C1.37447 2.33758 1.26895 2.23484 1.26895 2.10711C1.26895 1.97938 1.37447 1.87942 1.5022 1.87942C1.62993 1.87942 1.73266 1.97938 1.73266 2.10711C1.73266 2.23484 1.62993 2.33758 1.5022 2.33758ZM4.14007 0.946447L4.60378 0.146756C4.62877 0.0995519 4.61211 0.041241 4.56768 0.0162506C4.52048 -0.0115164 4.46217 0.00514383 4.44273 0.0523478L3.96791 0.860369C3.59584 0.69099 3.19321 0.602136 2.77671 0.604912C2.35187 0.604912 1.94369 0.696544 1.59105 0.857593L1.12179 0.0495711C1.0968 0.00236706 1.03849 -0.0142931 0.991284 0.013474C0.94408 0.0384643 0.930197 0.0967751 0.955187 0.143979L1.41612 0.943671C0.624759 1.37684 0.0805245 2.17931 0 3.12894H5.55341C5.47567 2.18208 4.93421 1.37961 4.14007 0.946447Z" fill="#27AAE1"/>
</svg>



        </div>
        <h3 className="text-xl font-semibold text-gray-800">Android Dev.</h3>
        {/* <p className="text-gray-600 mt-2">Node.js, Laravel, SQL</p> */}
          <Progress
          className='progressB'
      progress={85}
      progressLabelPosition="outside"
      textLabel="JetpackCompose"
      textLabelPosition="outside"
      color='dark'
      size="lg"
      labelProgress
      labelText
    />
                 <Progress
                 className='progressB'
    
      progress={40}
      progressLabelPosition="outside"
      textLabel="NativeScript"
      textLabelPosition="outside"
         color='dark'
      size="lg"
      labelProgress
      labelText
    />
              <Progress
              className='progressB'
  
      progress={10}
      progressLabelPosition="outside"
      textLabel="React Native"
      textLabelPosition="outside"
      size="lg"
         color='dark'
      labelProgress
      labelText
    />
      </div>
    </div>


  </div>
   
    {/* <div >
      <p>A ScrollTrigger with <code>scrub: true</code> links the scroll position to an animation's progress, making the scroll bar act like a scrubber while it's between the ScrollTrigger's <code>start</code> and <code>end</code>.</p>
      <div className="scroll-down">Scroll down<div className="arrow"></div></div>
    </div> */}
    
  </section>


  <section className=" items-center justify-center  text-center overflow-hidden">
  <div className=''>
   <h1 className='font-akshar sm:text-6xl text-2xl font-extrabold'>My Personal project.</h1>
   <p className='font-akshar sm:text-md text-2xl pt-10'>A working eCommerce app that still requires significant development.</p>
  </div>
  
          <div  className=" carousel   sm:w-[4500px] w-[2000px]  h-screen flex flex-nowrap overflow-hidden justify-evenly">
      {/* Example Carousel Items (Panels) */}
      <div className="panelo  w-[600px]   flex items-center justify-center text-4xl overflow-hidden">
          
          <Image
                                            src={`/mobileAppDepot2.png`}
                                            // loader={imageLoader}
                                            width={800}
                                            height={500}
                                           quality={100}
                                            alt="Picture"
                                            className=" sm:w-[800px] w-[300px]  absolute  "
                                        />
                                     
      </div>
            <div className="panelo  w-[600px]   flex items-center justify-center text-4xl overflow-hidden">
          
          <Image
                                            src={`/productpage.png`}
                                            // loader={imageLoader}
                                            width={500}
                                            height={500}
                                           quality={100}
                                            alt="Picture"
                                            className="sm:w-[500px] w-[300px]  absolute  "
                                        />
                                     
      </div>
      {/* <div className="panelo w-[600px]    flex items-center justify-center text-4xl  ">
           
          <Image
                                            src={`/mobileDepotProd.jpg`}
                                            // loader={imageLoader}
                                            width={300}
                                            height={100}
                                           quality={100}
                                            alt="Picture"
                                            className="  absolute z-50 shadow-2xl "
                                        />
      </div>
      <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
             <Image
                                            src={`/mobileDepot.jpg`}
                                            // loader={imageLoader}
                                            width={300}
                                            height={100}
                                           quality={100}
                                            alt="Picture"
                                            className="  absolute z-50 shadow-2xl "
                                        />
      </div> */}
      <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
         <Image
                                            src={`/DepotCart.png`}
                                            // loader={imageLoader}
                                            width={800}
                                            height={500}
                                           quality={100}
                                            alt="Picture"
                                            className=" sm:w-[800px] w-[300px] absolute   "
                                        />
      </div>
      <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
         <Image
                                            src={`/DepotCart2.png`}
                                            // loader={imageLoader}
                                            width={800}
                                            height={500}
                                           quality={100}
                                            alt="Picture"
                                            className=" sm:w-[800px] w-[300px] absolute   "
                                        />
      </div>
         <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
        
                                               <Image
                                            src={`/depotMainPage.png`}
                                            // loader={imageLoader}
                                            width={800}
                                            height={500}
                                           quality={100}
                                            alt="Picture"
                                            className="sm:w-[800px] w-[300px]  absolute   "
                                        />
      </div>
    </div>
    


        
{/* <a >https://next-js-v13-template-2023.vercel.app/</a> */}
      {/* <div className='grid grid-cols-2  h-screen'>
        <div className='flex justify-center items-center col-span-1'>
                <Image
                                            src={`/depot.png`}
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className=" w-1/3  absolute z-50 shadow-2xl "
                                        />
        </div>
      </div> */}
      <div className='flex items-center justify-center pb-64'>
    <a  href="https://next-js-v13-template-2023.vercel.app/" 
            target="_blank" rel="noopener noreferrer">
        <div className='flex items-center justify-center bg-black rounded-full px-5'>
          
          
                                                       <svg className=" mr-4 w-28 h-14 text-white  " version="1.2" baseProfile="tiny" id="Layer_1"
                                x="0px" y="0px" viewBox="0 0 190 73">
                                <path fill="none" strokeWidth="3" stroke="#fff" strokeMiterlimit="10" d="M155.7,23.5l-1.6-1.6l-2.8,2.8l-2.9-2.9l-2.8,2.9l-2.9-2.9l-2.5,2.6
	l-2.6-2.7l-2.8,2.8l-2.9-2.9l-2.7,2.7c0.9-7.5,6.5-13.3,13.3-13.3C149,11,154.5,16.4,155.7,23.5z"/>
                                {/* <path fill="#fff" d="M-2.6,18.2" /> */}
                                <polyline fill="#fff" points="30.9,2.3 30.9,55.6 40.4,55.6 40.4,2.3 35.6,2.3 " />
                                <polyline fill="#fff" points="167.4,3.1 167.4,53.5 176.1,53.5 176.1,3.1 171.8,3.1 " />
                                <path fill="#fff" d="M187.3,55.5l0.1-11.6h-3.5c-1.1,0-2,0.8-2,1.9l-0.1,9.7h2.8" />
                                <polyline fill="#fff" points="160.7,32.9 188.5,32.9 188.5,23.2 160.7,23.2 160.7,28.1 " />
                                <polyline fill="#fff" points="167.4,55.8 187.3,55.8 187.3,47.6 167.4,47.6 167.4,51.7 " />
                                <polyline fill="#fff" points="45.6,28.7 45.6,47.8 52.6,47.8 52.6,28.7 49.1,28.7 " />
                                <polyline fill="#fff" points="45.6,47 45.6,55.4 52.6,55.4 52.6,47 49.1,47 " />
                                <polyline fill="#fff" points="46,32.9 84.7,32.9 84.7,27.1 46,27.1 46,30 " />
                                <polyline fill="#fff" points="43,26 47,32.2 49.1,31.1 45.2,24.9 44.1,25.4 " />
                                <polyline fill="#fff" points="45.6,47.2 77.7,47.2 77.7,41.2 45.6,41.2 45.6,44.2 " />
                                <polyline fill="#fff" points="45.9,55.4 81.3,55.4 81.3,51.7 45.9,51.7 45.9,53.5 " />
                                <polyline fill="#fff" points="63.7,44.6 63.7,30 62.8,30 62.8,44.6 63.2,44.6 " />
                                <polyline fill="#fff" points="69,44.4 69,29.7 68.1,29.7 68.1,44.4 68.6,44.4 " />
                                <polyline fill="#fff" points="58.1,44.6 58.1,30 57.1,30 57.1,44.6 57.7,44.6 " />
                                <polyline fill="#fff" points="74,36.6 51.8,36.6 51.8,37.5 74,37.5 74,37 " />
                                <ellipse fill="none" stroke="#fff" strokeWidth="8" strokeMiterlimit="10" cx="19.4" cy="37" rx="14" ry="15.4" />
                                <path fill="#fff" d="M128.1,57.9L128.1,57.9z" />
                                <polyline fill="#fff" points="95.7,71.7 95.7,21.6 86,21.6 86,71.7 90.8,71.7 " />
                                <ellipse fill="none" stroke="#fff" strokeWidth="8" strokeMiterlimit="10" cx="106.9" cy="38.3" rx="14" ry="14" />
                                <polygon fill="#fff" points="77.7,47.2 84.7,32.9 73.5,32.9 73.7,46.8 " />
                                <ellipse fill="none" stroke="#fff" strokeWidth="3" strokeMiterlimit="10" cx="50.1" cy="59.2" rx="2.5" ry="2.3" />
                                <ellipse fill="none" stroke="#fff" strokeWidth="3" strokeMiterlimit="10" cx="74.7" cy="59.2" rx="2.5" ry="2.3" />
                                <ellipse fill="none" stroke="#fff" strokeMiterlimit="10" cx="43.4" cy="24.4" rx="1.2" ry="1.1" />
                                <path fill="#004a9f" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M156.9,24.7l-1.2-1.2l-1.6-1.6l-2.8,2.8l-2.9-2.9l-2.8,2.9l-2.9-2.9
	l-2.5,2.6l-2.6-2.7l-2.8,2.8l-2.9-2.9l-3,3l-3.2-3v30.5c0,2.5,2.1,4.6,4.6,4.6h24.3c2.6,0,4.6-2,4.6-4.6V22L156.9,24.7z M142.5,51.8
	c-6.3,0-11.4-5.1-11.4-11.5c0-1.6,0.3-3.1,0.9-4.5c1.7-4.1,5.8-7,10.5-7s8.8,2.9,10.5,7c0.6,1.4,0.9,2.9,0.9,4.5
	C153.9,46.7,148.8,51.8,142.5,51.8z"/>
                            </svg>
                         
       
        <p className=' text-white font-akshar'>Visit the website.</p>
        </div>
  </a>
      </div>
    {/* <span className="line line-1 w-full col-span-2"></span>
    <p className="w-full col-span-2">

    This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>
    
    </p> */}

  
  </section>


  


  {/* <section className="panel purple flex flex-col h-screen justify-center items-center w-full ">
  <div className='grid grid-cols-1  text-center content-center  place-items-center ' >
    <span className="line line-3"></span>
    <span className="  w-1/2 sm:text-4xl text-sm font-akshar font-semibold" >

There are other more projects to show. This website itself was built using the GSAP library. If you'd like something like this, please don't hesitate to contact me.
    </span>
  </div>
  </section> */}

<section className=" items-center justify-center  text-center overflow-hidden ">
  <div className=''>
   <h1 className='font-akshar sm:text-6xl text-2xl font-extrabold'>Here's an application for a small firm.</h1>
   <p className='font-akshar sm:text-md text-2xl pt-10 sm:m-24'>The application provides transaction management, reporting, mobile application for data entry, and automated calculations to help prevent discrepancies when using spreadsheets.</p>
  </div>
  
          <div  className=" carousel2   sm:w-[2500px] w-[100px]  h-screen flex flex-nowrap overflow-hidden justify-evenly">
      {/* Example Carousel Items (Panels) */}
      <div className="panelo  w-[600px]   flex items-center justify-center text-4xl overflow-hidden">
          
          <Image
                                            src={`/pjcc/1.png`}
                                            // loader={imageLoader}
                                            width={400}
                                            height={200}
                                           quality={100}
                                            alt="Picture"
                                            className=" sm:w-[400px] w-[200px] absolute  "
                                        />
                                     
      </div>
      {/* <div className="panelo w-[600px]    flex items-center justify-center text-4xl  ">
           
          <Image
                                            src={`/mobileDepotProd.jpg`}
                                            // loader={imageLoader}
                                            width={300}
                                            height={100}
                                           quality={100}
                                            alt="Picture"
                                            className="  absolute z-50 shadow-2xl "
                                        />
      </div>
      <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
             <Image
                                            src={`/mobileDepot.jpg`}
                                            // loader={imageLoader}
                                            width={300}
                                            height={100}
                                           quality={100}
                                            alt="Picture"
                                            className="  absolute z-50 shadow-2xl "
                                        />
      </div> */}
      <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
         <Image
                                            src={`/pjcc/2.png`}
                                            // loader={imageLoader}
                                            width={400}
                                            height={200}
                                           quality={100}
                                            alt="Picture"
                                            className=" sm:w-[400px] w-[200px] absolute   "
                                        />
      </div>
      <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
         <Image
                                            src={`/pjcc/3.png`}
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className=" sm:w-[1000px] w-[500px] absolute   "
                                        />
      </div>
         {/* <div className="panelo w-[600px]    flex items-center justify-center text-4xl ">
        
                                               <Image
                                            src={`/depotMainPage.png`}
                                            // loader={imageLoader}
                                            width={800}
                                            height={500}
                                           quality={100}
                                            alt="Picture"
                                            className="  absolute   "
                                        />
      </div> */}
    </div>
    


        
{/* <a >https://next-js-v13-template-2023.vercel.app/</a> */}
      {/* <div className='grid grid-cols-2  h-screen'>
        <div className='flex justify-center items-center col-span-1'>
                <Image
                                            src={`/depot.png`}
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className=" w-1/3  absolute z-50 shadow-2xl "
                                        />
        </div>
      </div> */}
      <div className='flex items-center justify-center  '>
    <a  href="https://pjccwebnextjs.vercel.app/signin" 
            target="_blank" rel="noopener noreferrer">
        <div className='flex items-center justify-center px-5'>
           <Image
                                            src={` https://res.cloudinary.com/dbkhak42n/image/upload/v1664550319/pjcc_byanzl.png`}
                                            // loader={imageLoader}
                                            width={200}
                                            height={200}
                                           quality={100}
                                            alt="Picture"
                                            className=" z-50  "
                                        />
          
                             
                         
       
        
        </div>
        <p className=' '>Visit the website, However main function of the application is prohibited.</p>
  </a>
      </div>
    {/* <span className="line line-1 w-full col-span-2"></span>
    <p className="w-full col-span-2">

    This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>
    
    </p> */}

  
  </section>

<section className="panel gray h-screen flex flex-col justify-center items-center">
    <span className=" sm:text-8xl text-lg font-akshar font-extrabold" >

    Let's talk about your plan!
    </span>
</section>







    </div>
  
        
        </>

)
}

export default TestAnimation;