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
    

    
    useEffect(() => {
        const listener = (e: any) => {
            if (ref.current != null) {
                if (!ref.current.contains(e.target)) {
                    // setShowOptions(false)
                    // setCursor(-1)
                }
            }

        };

        // document.addEventListener('click', listener)
        // document.addEventListener('focusin', listener)
        // return () => {
        //     document.removeEventListener('click', listener);
        //     document.removeEventListener('focusin', listener);
        // }
    }, []);

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
     

               gsap.to("#typeWriterText", {
            scrollTrigger: {
             
              trigger: "#typeWriterText",
              toggleClass: "-translate-x-1/2",
              scrub: true,
              // pin: true,
              start: "+0%",
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
              end: "+=200%"
            },
            // duration: .05,
            // opacity: 100
           duration: 200,
                     attr:{
            src: "https://raw.githubusercontent.com/pat22292/PatrickPortfolio/4e540f4aa84c7e4f83277755f7f1f5a6f47d5417/assets/svg/3d3.svg" 
           }, 
  autoAlpha: 1, // Combines opacity and visibility for better performance
  ease: "power2.inOut"
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
              start: "+=390%",
              end: "+=390%"
            },
            // duration: .05,
            // opacity: 100
           duration: 200, 

           attr:{
            src: "https://raw.githubusercontent.com/pat22292/PatrickPortfolio/4e540f4aa84c7e4f83277755f7f1f5a6f47d5417/assets/svg/dev.svg" 
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
              start: "+=4500%",
              end: "+=50%"
            },
            duration:.1,
            text: " Mobile Dev.",
            ease: "none",
          });

                  gsap.to(".my-image", {
            scrollTrigger: {
              trigger: ".my-image",
              scrub: true,
              // pin: true,
              start: "+=625%",
              end: "+=625%"
            },
            // duration: .05,
            // opacity: 100
           duration: 200, 

           attr:{
            src: "https://raw.githubusercontent.com/pat22292/PatrickPortfolio/4e540f4aa84c7e4f83277755f7f1f5a6f47d5417/assets/svg/van-shadowed.svg" 
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

                    
          
          gsap.from(".line-1", {
            scrollTrigger: {
              trigger: ".red",
              scrub: true,
              pin: true,
              start: "top top",
              end: "+=400%"
            },
            scaleX: 0,
            transformOrigin: "left center", 
            ease: "none",
            stagger: 1
          });
          

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
          
          tl.from(".purple span", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
            .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
            .to(".purple", {backgroundColor: "#28a92b",  stagger: 1}, 1);
          
          

          var tlImg = gsap.timeline( {
            scrollTrigger: {
              trigger: ".my-image",
              scrub: true,
              pin: true,
              start: "+=1100%",
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
      <div className='fixed flex justify-center items-end h-screen  w-screen z-50 '>
       <DotLottieReact
      src="Mouse Scroll Down.json"
      loop
      autoplay
      className='w-64  mb-10'
    />
      </div>

    <section className="panel orange  text-black md:grid md:grid-cols-2 hidden h-screen justify-center items-center">
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
    
      <h1 className='text-8xl font-akshar  font-extrabold  drop-shadow-xl md:inline-block hidden'>Hi, I can be a  
        
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
    
  <div className='text-center content-center place-items-center mx-200'>
      <Image
                                            src={`https://res.cloudinary.com/dhdn7ukv9/image/upload/sudz7gynp33pdyqzsjpx`}
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className="h-auto w-96 my-image opacity-0"
                                        />
  <span className="line line-2SM col-span-1 h-screen  "></span>
    <div className='text-black '>
    
      {/* <h1 className='text-5xl font-extrabold drop-shadow-xl'>Hi, I can be a  
        
         <span className="textKo text-5xl font-extrabold">  </span>
      <span className="blinking-cursor">|</span>
      </h1> */}
     <div className='text-center  md:col-span-1 col-span-1  flex items-center justify-center'>
    
      </div>

      <h1 className='text-5xl text-black font-extrabold drop-shadow-xl md:hidden inline-block '>Hi, I can be a  
        <span className="textKoSM text-5xl font-extrabold"></span>
     <span className="blinking-cursor-sm ">|</span>
     </h1>

    </div>

    </div>
  </section>

    <div className="flex flex-col h-screen justify-center items-center description panel blue  w-full text-center align-middle">
    <div >
      <p>A ScrollTrigger with <code>scrub: true</code> links the scroll position to an animation's progress, making the scroll bar act like a scrubber while it's between the ScrollTrigger's <code>start</code> and <code>end</code>.</p>
      <div className="scroll-down">Scroll down<div className="arrow"></div></div>
    </div>
  </div>


  <section className="panel red bg-red-500 w-full flex flex-col h-screen justify-center items-center">
    <div className='grid grid-cols-2 m:w-3/4 w-1/3'>
    <span className="line line-1 w-full col-span-2"></span>
    <p className="w-full col-span-2">

    This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code>
    </p>

    </div>
  </section>


  


  <section className="panel purple bg-purple-500 flex flex-col h-screen justify-center items-center w-full ">
  <div className='grid grid-cols-1  text-center content-center  place-items-center' >
    <span className="line line-3"></span>
    <span>

    This panel gets pinned in a similar way, and has a more involved animation that's wrapped in a timeline, fading the background color and animating the transforms of the paragraph in addition to the line, all synced with the scroll position perfectly.
    </span>
  </div>
  </section>



<section className="panel gray h-screen flex flex-col justify-center items-center">
  DONE!
</section>









    </div>
  
        
        </>

)
}

export default TestAnimation;