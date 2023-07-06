'use client';


import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';
import ButtonSimpan from './ButtonSimpan';

export default function FormAirportUpdate(onClick) {
    return (
        <div className='h-[420px]  w-[989px] bg-white  font-poppins'>
            <div className='h-[48px] w-[982px] rounded-t-[20px] bg-blue-1 pl-6 pt-2'>
                <h1 className='text-[24px] font-semibold text-white'>Airport</h1>
            </div>
            <div className='ml-[20px] mt-[10px] flex '>
                <form>
                    <div className=''>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='airlineID' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                               Kode Airport
                            </label>
                            <input
                                type='airlineID'
                                id='airlineID'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                placeholder='CGK'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px] '>
                            <label htmlFor='AirportIDFrom' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Nama Airport
                            </label>
                            <input
                                type='AirportIDFrom'
                                id='AirportIDFrom'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                placeholder='Soekarno Hatta'
                                required=''
                            />
                        </div>
                    </div>
                </form>

                {/* FORM KANAN */}
                <form className='ml-[136px] '>
                    <div className=''>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='From' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Location
                            </label>
                            <input
                                type='From'
                                id='From'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                placeholder='Jakarta'
                                required=''
                            />
                        </div>

                        <div className='mt-[210px] ml-[280px]'>
                            <ButtonSimpan />
                        </div>
                    </div>

                    {/* BUTTON */}
                </form>
            </div>
        </div>
    );
}
