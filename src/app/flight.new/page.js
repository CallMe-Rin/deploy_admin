'use client';
import Image from 'next/image';
import FormFlightAdd from '@/components/FormFlightAdd';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FlightAdd() {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    

    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (isMounted) {
        return (
            <section className='h-[950px] w-[1440px] bg-grey-2  '>
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
                                        <h1 className=' w-[105px] text-[32px] font-bold text-blue-1'>Flight</h1>
                                        <div className='ml-[262px]'>{/* <TopComponent /> */}</div>
                                    </div>
                                </div>
                            </div>
                            {/* FORM */}
                            <div className='ml-[351px] mt-[77px] '>
                                <div className='flex'>
                                    <img
                                        onClick={() => router.push('/flight')}
                                        className=' cursor-pointer'
                                        src={`./images/back.svg`}
                                        alt=''
                                    />
                                    <h1 className='ml-[12px] text-[21px] font-bold text-blue-1 '>New Flight</h1>
                                    <div className='ml-[670px] '></div>
                                </div>
                                <div className='mt-[24px]'>
                                    <FormFlightAdd />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        );
    }
}
