'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import axios from 'axios';

import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import TableFlight from '@/components/TableFlight';
import ButtonAdd from '@/components/ButtonAdd';

export default function Flight() {
    const [fetchFlight, setFetchFlight] = useState(true);
    const [flight, setFlight] = useState([]);

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

    return (
        <section className='h-[4150px] w-full bg-grey-2  '>
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
                                <div className=' flex'>
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>Flight</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[351px] mt-[120px] '>
                            <div className='flex items-center'>
                                
                                <h1 className=' text-[21px] font-bold text-blue-1 '>Data Flight</h1>
                                <div className='ml-[835px] '>
                                    <ButtonAdd />
                                </div>
                            </div>
                            <div className='mt-[24px]'>
                                <TableFlight flight={flight} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
