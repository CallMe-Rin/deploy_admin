'use client';

import Image from 'next/image';

export default function TableFlight({ flight, handleClickFlight }) {
    return (
        <nav className='w-[1070px] overflow-x-auto border-b border-gray-200 bg-white shadow-md sm:rounded-lg'>
            <div className='overflow-x-auto overflow-y-auto'>
                <div className='inline-block min-w-full py-2 sm:px-[27px] lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className='min-w-full'>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='px-[27px] py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airline
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airport From
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airport To
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        Arrival <br />
                                        Date
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Arrival <br />
                                        Time
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        Derpature <br />
                                        Date
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Derpature <br />
                                        Time
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        From
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        To
                                    </th>
                                    {/* <th scope='col' className='px-[27px] py-4'>
                                        Duration
                                    </th> */}
                                    <th scope='col' className='px-[27px] py-4'>
                                        Price
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Flight Class
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Description
                                    </th>

                                    {/* <th scope='col' className='px-[27px] py-4'>
                                        Action
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {flight.length ? (
                                    flight.map((flight, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className='border-b bg-white text-center text-[14px] font-normal text-black '>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{index + 1}</td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>
                                                    {flight.Airline.airline_name}
                                                    {/* {flight.departure_date} */}
                                                </td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>
                                                    {flight.Airport_from.airport_code}
                                                </td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>
                                                    {flight.Airport_to.airport_code}
                                                </td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.departure_date}</td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.departure_time}</td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.arrival_date}</td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.arrival_time}</td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.from}</td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.to}</td>
                                                {/* <td className='whitespace-nowrap px-[27px] py-4'>3</td> */}
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.price}</td>
                                                <td className='whitespace-nowrap px-[27px] py-4'>{flight.flight_class}</td>
                                                <td className='whitespace-pre-line px-[27px] py-4'>{flight.description}</td>

                                                {/* <td className='justify-center whitespace-nowrap px-[27px] py-4 '>
                                                    <div className=' flex w-[24px] space-x-[12px] whitespace-nowrap'>
                                                        <Image
                                                            onClick={() => handleClickFlight(flight)}
                                                            width={24}
                                                            height={24}
                                                            className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                            src={`./images/Pencil.svg`}
                                                            alt=''
                                                        />
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                            src={`./images/trash.svg`}
                                                            alt=''
                                                        />
                                                    </div>
                                                </td> */}
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <div>
                                        <h1>Loading....</h1>
                                    </div>
                                )}

                                {/* BATAS COBA */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
