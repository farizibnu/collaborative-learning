import React from 'react'
import badge1 from '../../data/achievement1.png'
import badge2 from '../../data/achievement2.png'
import badge3 from '../../data/achievement3.png'
import badge4 from '../../data/achievement4.png'
import badge5 from '../../data/achievement5.png'
import badge6 from '../../data/achievement6.png'
import badge7 from '../../data/achievement7.png'
import badge8 from '../../data/achievement8.png'
import badge9 from '../../data/achievement9.png'

const AchievementList = () => {
  return (
    <div className='grid grid-cols-3 gap-x-16 gap-y-8 text-center'>
        <div className='rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='' src={badge1} alt="badge-1" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='' src={badge2} alt="badge-2" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-stone-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='grayscale' src={badge3} alt="badge-3" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-stone-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='grayscale' src={badge4} alt="badge-4" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-stone-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='grayscale' src={badge5} alt="badge-5" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-stone-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='grayscale' src={badge6} alt="badge-6" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-stone-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='grayscale' src={badge7} alt="badge-7" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-stone-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='grayscale' src={badge8} alt="badge-8" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
        <div className='rounded-2xl bg-stone-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='h-32 m-4 flex justify-center'>
                <img className='grayscale' src={badge9} alt="badge-9" />
            </div>
            <div className='mx-4'>
                <p className='font-bold text-lg'>Nama Achievement</p>
                <p className='text-xs'>Tanggal diraih</p>
                <p className='font-semibold text-sm my-4'>Detail Achievement Detail Achievement Detail Achievement Detail Achievement Detail Achievement</p>
            </div>
        </div>
    </div>
  )
}

export default AchievementList