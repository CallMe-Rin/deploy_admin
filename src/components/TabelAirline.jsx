'use client';

import Image from 'next/image';

export default function TableAirline({ airlines, handleClickAirline, handleClickDelete }) {
    return (
        <nav className='flex w-[920px]  border-b border-gray-200 bg-white shadow-md sm:rounded-lg'>
            <div className=''>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='w-[920px] overflow-hidden'>
                        <table className=''>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='ml-[76px] py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='ml-[93px] px-[93px] py-4'>
                                        Kode Airline
                                    </th>
                                    <th scope='col' className='px-[87px] py-4'>
                                        Name Airline
                                    </th>
                                    <th scope='col' className='py-4 pl-[141px]'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {airlines.length ? (
                                    airlines.map((airline, index) => {
                                        return (
                                            <tr key={index} className='border-b text-center text-[14px] font-normal text-black '>
                                                <td className='whitespace-nowrap px-6 py-4'>{index + 1}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{airline.airline_code}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{airline.airline_name}</td>
                                                <td className='items-center whitespace-nowrap py-4 pl-[135px] '>
                                                    <div className=' flex w-[24px] space-x-[12px] whitespace-nowrap'>
                                                        <Image
                                                            onClick={() => handleClickAirline(airline)}
                                                            width={24}
                                                            height={24}
                                                            className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                            src={`./images/Pencil.svg`}
                                                            alt=''
                                                        />
                                                        <Image
                                                            onClick={() => handleClickDelete(airline)}
                                                            width={24}
                                                            height={24}
                                                            className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                            src={`./images/trash.svg`}
                                                            alt=''
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <h1>Loading....</h1>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
