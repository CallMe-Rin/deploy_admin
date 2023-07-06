'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import axios from 'axios';

import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import TableFlight from '@/components/TableFlight';
import ButtonAdd from '@/components/ButtonAdd';

export default function Flight() {
    const router = useRouter();
    //tambah state isMounted
    const [isMounted, setIsMounted] = useState(false);

    const [fetchFlight, setFetchFlight] = useState(true);
    const [flight, setFlight] = useState([]);
    const [chooseFlight, setChooseFlight] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [flightData, setFlightData] = useState({
        airline_izd: '',
        airport_id_from: '',
        airport_id_to: '',
        departure_date: '',
        departure_time: '',
        arrival_date: '',
        arrival_time: '',
        from: '',
        to: '',
        price: 0,
        flight_class: '',
        description: '',
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleFlightData = (event) => {
        setFlightData({ ...flightData, [event.target.name]: event.target.value });
    };

    const handleClickFlight = (data) => {
        console.log('====================================');
        console.log('DATA FLIGHT', data);
        console.log('====================================');
        setChooseFlight(data); // taro data ke local state
        setOpenModal(true);
    };

    const handleUpdateFlight = () => {
        const idFlight = chooseFlight.id;

        const URL_UPDATE = `https://kel1airplaneapi-production.up.railway.app/api/v1/flight/updateflight/${idFlight}`;
    };
    //     {
    //   "airline_id": 2,
    //   "airport_id_from": 6,
    //   "airport_id_to": 1,
    //   "departure_date": "2023-07-07",
    //   "departure_time": "16:00",
    //   "arrival_date": "2023-07-07",
    //   "arrival_time": "18:00",
    //   "from": "Bali",
    //   "to": "Jakarta",
    //   "price": 3000000,
    //   "flight_class": "Bussiness",
    //   "description": "Baggage 20 kg Cabin baggage 7 kg In Flight Entertainment"
    // }

    useEffect(() => {
        if (fetchFlight) {
            const getFlight = async () => {
                try {
                    const token =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODc5NjA0NTYsImV4cCI6MTY4ODEzMzI1Nn0.v_ktm7kT1I5q_zMQXusG5jvLkW5e9IEz6bvQIb99DH4';
                    const URL_FLIGHT = 'https://kel1airplaneapi-production.up.railway.app/api/v1/flight/getflight';

                    const response = await axios.get(URL_FLIGHT, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    // console.log('RESPONSE FLIGHT', response);
                    // console.log('RESPONSE DATA FLIGHT', response.data);
                    // console.log(' DATA FLIGHT', response.data.data);
                    // console.log(' DATA FLIGHT', response.data.data.flight);

                    const flightData = response.data.data.flight;
                    setFlight(flightData);
                } catch (error) {
                    console.log('ERROR FLIGHT', error);
                }
            };
            getFlight();
        }
        setFetchFlight(false);
    }, [fetchFlight]);

    // console.log('====================================');
    // console.log('FLIGHT', flight);
    // console.log('====================================');

    if (isMounted) {
        return (
            <section className='h-[4150px] w-full bg-grey-2  '>
                <div className=''>
                    <div className='flex '>
                        {/* SIDEBAR */}
                        <div className=''>
                            <Aside />
                        </div>
                        <div className=''>
                            {/* NAVBAR */}
                            <div className='ml-[361px] mt-[47px]'>
                                <div>
                                    <div className='flex '>
                                        <h1 className=' text-[32px] font-bold text-blue-1 '>Flight</h1>
                                        <div className='ml-[262px]'>
                                            {/* <TopComponent /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABLE */}
                            <div className='ml-[351px] mt-[120px] '>
                                <div className='flex items-center'>
                                    <h1 className=' text-[21px] font-bold text-blue-1 '>Data Flight</h1>
                                    {/* <div onClick={() => router.push('/flight.new')} className='ml-[835px] '>
                                        <ButtonAdd />
                                    </div> */}
                                </div>
                                <div className='mt-[24px]'>
                                    <TableFlight flight={flight} handleClickFlight={handleClickFlight} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {openModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                        <div className='h-[600px] w-[600px] bg-white'>
                            <div>
                                <label htmlFor=''>Nama Airpoty</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label htmlFor=''>Nama Airline</label>
                                <input type='text' value={chooseFlight.from} />
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    }
}
