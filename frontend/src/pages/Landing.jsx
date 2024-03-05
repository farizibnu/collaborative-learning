import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import avatar from '../data/landing-profile.png';
import pattern from '../data/landing-pattern.png';
import SplitType from 'split-type';

const Landing = () => {
  const loremRef = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    // Animation timeline for the Lorem Ipsum text
    const tl2 = gsap.timeline({ defaults: { duration: 1.5, ease: "back.out(0.5)", opacity: 0 } });
    tl2.from(bar.current, { delay: 1, scaleX: 0 , transformOrigin: 'left'});

    const title = new SplitType('#title')
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: .1
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div>
      <div className='grid grid-rows-3 grid-cols-4 content-center w-full h-screen'>
        <div className='row-span-3 col-span-2 -mt-20 ml-20 items-center flex justify-center'>
          <div className='space-y-6'>
            <div className='space-y-6'>
              <p id='title' className='text-4xl font-bold tracking-wide py-1 '>
                <span className='text-orange-400'>Col</span>laborative{' '}
                <span className='text-orange-400'>le</span>arning
              </p>
              <p className='text-6xl font-extrabold leading-snug'>Unlock Knowledge, Grow Skills 
                <span className='bg-orange-400 h-16 w-28 rounded-xl inline-block p-3 pl-5 mx-4 -mb-3'>
                    <svg width="69" height="41" viewBox="0 0 69 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={bar} d="M1.17157 33.3054C-0.390524 34.8675 -0.390524 37.4001 1.17157 38.9622C2.73367 40.5243 5.26633 40.5243 6.82843 38.9622L1.17157 33.3054ZM6.82843 38.9622L26.1618 19.6289L20.5049 13.972L1.17157 33.3054L6.82843 38.9622Z M26.1618 13.972C24.5997 12.4099 22.067 12.4099 20.5049 13.972C18.9428 15.5341 18.9428 18.0668 20.5049 19.6289L26.1618 13.972ZM40.6618 28.472L26.1618 13.972L20.5049 19.6289L35.0049 34.1289L40.6618 28.472Z M35.0049 28.472C33.4428 30.0341 33.4428 32.5668 35.0049 34.1289C36.567 35.691 39.0997 35.691 40.6618 34.1289L35.0049 28.472ZM40.6618 34.1289L64.8285 9.96221L59.1716 4.30536L35.0049 28.472L40.6618 34.1289Z M45.5311 2.56038C43.3343 2.79368 41.7426 4.76366 41.9759 6.96045C42.2092 9.15723 44.1792 10.7489 46.376 10.5156L45.5311 2.56038ZM65.9225 0.39476L45.5311 2.56038L46.376 10.5156L66.7674 8.35002L65.9225 0.39476Z M60.2721 21.821C60.5142 24.0168 62.4906 25.6006 64.6864 25.3584C66.8823 25.1162 68.466 23.1398 68.2238 20.944L60.2721 21.821ZM58.0241 1.43849L60.2721 21.821L68.2238 20.944L65.9759 0.561507L58.0241 1.43849Z" fill="white"/>
                    </svg>
                </span>
              Achieve Success.</p>
              <p className='font-semibold py-2' ref={loremRef}>
                Temukan pengalaman pembelajaran kolaboratif dan interaktif dengan <span className='font-extrabold'>COLLE</span> - platform web 
                inovatif untuk mahasiswa dan dosen perguruan tinggi, hadir dengan materi pembelajaran, 
                kuis, forum, dan kesempatan untuk berhubungan dengan teman belajar. Bergabunglah sekarang 
                untuk memanfaatkan potensi belajar Anda secara maksimal!
              </p>
            </div>
            <div className='gap-4 flex justify-center'>
              <Link to='/login'>
                <button className='rounded-full py-4 px-10 font-bold text-white bg-orange-400 text-xl transition ease-in-out delay-150 hover:scale-110 hover:bg-orange-500 duration-300'>Login</button>
              </Link>
              <Link to='/register'>
                <button className='rounded-full py-3 px-6 font-bold text-orange-400 border-4 border-orange-400 bg-white text-xl transition ease-in-out delay-150 hover:scale-110 hover:border-orange-500 hover:text-orange-500 duration-300'>
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-span-2 bg-orange-400 rounded-tl-full h-screen relative landing-pattern'>
          <img className='absolute bottom-0 left-24 h-full w-auto' src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
