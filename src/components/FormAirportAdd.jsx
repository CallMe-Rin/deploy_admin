'use client';
import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';
import axios from 'axios';
import ButtonSubmit from '@/components/ButtonSubmit';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FormAirportAdd(onClick) {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [airport, setAirport] = useState({
        airport_code: '',
        airport_name: '',
        airport_location: '',
    });

    const handleAirport = (event) => {
        setAirport({ ...airport, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const dataForm = {
                airport_code: airport.airport_code,
                airport_name: airport.airport_name,
                airport_location: airport.airport_location,
            };

            if (!airport.airport_code || !airport.airport_name || !airport.airport_location) {
                console.log('Field harus diisi semua!');
                return;
            }

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODg2MTI1NTEsImV4cCI6MTY4ODc4NTM1MX0.hC89EcuiXlPjcDlJYMMEFV7DFzQ4Y3zkdgpXczMnb30';

            const URL_POST = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airport';

            const response = await axios.post(URL_POST, dataForm, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log('============== SUBMIT DATA SUCCESS =============');

            router.push('/airport')
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
            <div className='h-[420px]  w-[989px] bg-white  font-poppins'>
                <div className='h-[48px] w-[982px] rounded-t-[20px] bg-blue-1 pl-6 pt-2'>
                    <h1 className='text-[24px] font-semibold text-white'>Airport</h1>
                </div>
                <div className='ml-[20px] mt-[10px] flex '>
                    <form onSubmit={handleSubmit}>
                        <div className=''>
                            <div className='mb-[44px] h-[42px] w-[408px]'>
                                <label htmlFor='airport_code' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                    Kode Airport
                                </label>
                                <input
                                    id='airport_code'
                                    name='airport_code'
                                    type='text'
                                    value={airport.airport_code}
                                    onChange={handleAirport}
                                    className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                    placeholder='CGK'
                                    required=''
                                />
                            </div>
                            <div className='mb-[44px] h-[42px] w-[408px] '>
                                <label htmlFor='airport_name' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                    Nama Airport
                                </label>
                                <input
                                    id='airport_name'
                                    name='airport_name'
                                    type='text'
                                    value={airport.airport_name}
                                    onChange={handleAirport}
                                    className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                    placeholder='Soekarno Hatta'
                                    required=''
                                />
                            </div>
                            <div className='mb-[44px] h-[42px] w-[408px] '>
                                <label htmlFor='airport_location' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                    Location
                                </label>
                                <input
                                    id='airport_location'
                                    name='airport_location'
                                    type='text'
                                    value={airport.airport_location}
                                    onChange={handleAirport}
                                    className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                    placeholder='Jakarta'
                                    required=''
                                />
                            </div>

                            <div className='ml-[800px] mt-[150px]'>
                                <ButtonSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
