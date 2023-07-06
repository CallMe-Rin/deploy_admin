'use client';

import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';
import ButtonSubmit from './ButtonSubmit';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FormFlightAdd() {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    const [fetchFlight, setFetchFlight] = useState(true);
    const [flight, setFlight] = useState({
        airline_id: '',
        airport_id_from: '',
        airport_id_to: '',
        departure_date: '',
        departure_time: '',
        arrival_date: '',
        arrival_time: '',
        from: '',
        to: '',
        price: '',
        flight_class: '',
        description: '',
    });

    const handleFlight = (event) => {
        setFlight({ ...flight, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const dataForm = {
                airline_id: flight.airline_id,
                airport_id_from: flight.airport_id_from,
                airport_id_to: flight.airport_id_to,
                departure_date: flight.departure_date,
                departure_time: flight.departure_time,
                arrival_date: flight.arrival_date,
                arrival_time: flight.arrival_time,
                from: flight.from,
                to: flight.to,
                price: flight.price,
                flight_class: flight.flight_class,
                description: flight.description,
            };

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODgzMjk1NzgsImV4cCI6MTY4ODUwMjM3OH0.pi_GiBwEDg-p67aAEB4pncjuw7sHFq1jmQDsk8e1VuQ';

            const URL_POST = 'https://kel1airplaneapi-production.up.railway.app/api/v1/flight/createflight';

            const response = await axios.post(URL_POST, dataForm, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log('============== SUBMIT DATA SUCCESS =============');

            return response.data;
        } catch (error) {
            console.log('============== SUBMIT DATA ERROR =============');
            console.log(error);
        }
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (isMounted) {
        return (
            <div className='h-[700px]  w-[982px] bg-white  font-poppins'>
                <div className='h-[48px] w-[982px] rounded-t-[20px] bg-blue-1 pl-6 pt-2'>
                    <h1 className='text-[24px] font-semibold text-white '>Flight</h1>
                </div>

                <div className='ml-[20px] mt-[25px] flex '>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <div>
                            <div className=''>
                                <div className='mb-[44px] h-[42px] w-[408px]'>
                                    <label htmlFor='airlineID' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                        Airline
                                    </label>
                                    {/* <input
                                        type='text'
                                        onChange={handleFlight}
                                        // value={airline.airline_name}
                                        className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                        placeholder='Super Air Jet'
                                        required=''
                                    /> */}
                                    {/* {airline.lenght ? (
                                        airline.map((airline) => {
                                            return (
                                                <select className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '>
                                                    <option value=''></option>
                                                    <option value='bucharest'>Bucharest</option>
                                                    <option value='london'>London</option>
                                                    <option value='washington'>Washington</option>
                                                </select>
                                            );
                                        })
                                    ) : (
                                        <h1>Loading....</h1>
                                    )}
                                     */}
                                    <select className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '>
                                         <option value=''>Brazil</option>
                                         <option value='bucharest'>Bucharest</option>
                                         <option value='london'>London</option>
                                         <option value='washington'>Washington</option>
                                     
                                    </select>
                                </div>
                                <div className='mb-[44px] h-[42px] w-[408px] '>
                                    <label htmlFor='AirportIDFrom' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                        Airport From
                                    </label>
                                    <input
                                        type='AirportIDFrom'
                                        id='AirportIDFrom'
                                        onChange={handleFlight}
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
                                        onChange={handleFlight}
                                        className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                        placeholder='SRG'
                                        required=''
                                    />
                                </div>
                                <div className='mb-[44px] h-[35px] w-[408px]'>
                                    <label htmlFor='DerpartureDate' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                        Derparture Date
                                    </label>
                                    {/* <input
                                type='DerpartureDate'
                                id='DerpartureDate'
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                                placeholder='Super Air Jet'
                                required=''
                            /> */}

                                    <input
                                        className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                                        type='date'
                                    />
                                </div>
                                <div className='mb-[44px] h-[42px] w-[408px]'>
                                    <label htmlFor='DerpartureTime' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                        Derparture Time
                                    </label>
                                    <input
                                        type='time'
                                        id='DerpartureTime'
                                        onChange={handleFlight}
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
                                        type='date'
                                        id='ArrivalDate'
                                        onChange={handleFlight}
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
                                        type='time'
                                        id='ArrivalTime'
                                        onChange={handleFlight}
                                        className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                                        placeholder='10:00'
                                        required=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='ml-[136px] '>
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
                                    <ButtonSubmit />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}
