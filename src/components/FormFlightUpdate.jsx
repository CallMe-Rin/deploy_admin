'use client';

import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';
import ButtonSimpan from '@/components/ButtonSimpan';

export default function FormFlightUpdate(onClick) {
    return (
        <div className='h-[700px]  w-[982px] bg-white  font-poppins'>
            <div className='h-[48px] w-[982px] rounded-t-[20px] bg-blue-1 pl-6 pt-2'>
                <h1 className='text-[24px] font-semibold text-white '>Flight</h1>
            </div>
            <div className='ml-[20px] mt-[25px] flex '>
                <form>
                    <div className=''>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='airlineID' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Airline
                            </label>
                            <input
                                type='airlineID'
                                id='airlineID'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                placeholder='Super Air Jet'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px] '>
                            <label htmlFor='AirportIDFrom' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Airport From
                            </label>
                            <input
                                type='AirportIDFrom'
                                id='AirportIDFrom'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                placeholder='CGK'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='AirportIDTo' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Airport To
                            </label>
                            <input
                                type='AirportIDTo'
                                id='AirportIDTo'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                placeholder='SRG'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[35px] w-[408px]'>
                            <label htmlFor='DerpartureDate' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Derparture Date
                            </label>
                            <input
                                type='DerpartureDate'
                                id='DerpartureDate'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                                placeholder='Super Air Jet'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='DerpartureTime' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Derparture Time
                            </label>
                            <input
                                type='DerpartureTime'
                                id='DerpartureTime'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                                placeholder='10:00'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='ArrivalDate' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Arrival Date
                            </label>
                            <input
                                type='ArrivalDate'
                                id='ArrivalDate'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                                placeholder='12/12/2023'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='ArrivalTime' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Arrival Time
                            </label>
                            <input
                                type='ArrivalTime'
                                id='ArrivalTime'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                                placeholder='10:00'
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
                                From
                            </label>
                            <input
                                type='From'
                                id='From'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                placeholder='Jakarta'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='To' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                To
                            </label>
                            <input
                                type='To'
                                id='To'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                placeholder='Semarang'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px] '>
                            <label htmlFor='duration' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Duration
                            </label>
                            <input
                                type='duration'
                                id='duration'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                placeholder='3 jam'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='price' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Price
                            </label>
                            <input
                                type='price'
                                id='price'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                placeholder='Rp2.000.000'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='flight_class' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Flight Class
                            </label>
                            <select
                                id='Class'
                                className='mt-[4px] block w-full rounded-[5px] border border-gray-300  bg-gray-50 p-2.5 text-black   dark:placeholder-gray-400 '>
                                <option selected=''>Economy</option>
                                <option value='US'>Premium Economy</option>
                                <option value='CA'>Business</option>
                                <option value='FR'>First Class</option>
                            </select>
                        </div>
                        <div className='mb-[66px] h-[42px] w-[408px]'>
                            <label htmlFor='description' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Description
                            </label>
                            <textarea
                                id='description'
                                rows='4'
                                className='mt-[4px] block h-[70px] w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 '
                                placeholder=''></textarea>
                        </div>
                        <div className='ml-[280px] mt-[100px]'>
                            <ButtonSimpan />
                        </div>
                    </div>

                    {/* BUTTON */}
                </form>
            </div>
        </div>
    );
}
