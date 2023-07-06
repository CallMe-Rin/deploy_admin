'use client';

import Image from 'next/image';
import FormAirportUpdate from '@/components/FormAirportUpdate';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';

export default function AirportUpdate() {
    return (
        <section className='h-full w-full bg-grey-2  '>
            <nav className=''>
                <div className='flex '>
                    {/* SIDEBAR */}
                    <div className=' '>
                        <Aside />
                    </div>
                    <div className=''>
                        {/* NAVBAR */}
                        <div className='ml-[361px] mt-[47px]'>
                            <div>
                                <div className='flex'>
                                    <h1 className=' w-[105px] text-[32px] font-bold text-blue-1'>Airport</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FORM */}
                        <div className='ml-[351px] mt-[77px]  '>
                            <div className='flex'>
                                <img className='cursor-pointer' src={`./images/back.svg`} alt='' />
                                <h1 className='ml-[12px] text-[21px] font-bold text-blue-1 '>Update Airport</h1>
                                <div className='ml-[670px] '></div>
                            </div>
                            <div className='mt-[24px]'>
                                <FormAirportUpdate />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
