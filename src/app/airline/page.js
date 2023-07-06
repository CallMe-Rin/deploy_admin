'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import TableAirline from '@/components/TabelAirline';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';
import ButtonSimpan from '@/components/ButtonSimpan';

export default function Airline() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [changeData, setChangeData] = useState(false);
    const [fetchAirlines, setFetchAirlines] = useState(true);
    const [airlines, SetAirlines] = useState([]);
    const [chooseAirline, setChooseAirline] = useState(null);
    const [airlineData, setAirlineData] = useState({
        airline_code: '',
        airline_name: '',
    });

    const [isMounted, setIsMounted] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleAirlineData = (event) => {
        setAirlineData({ ...airlineData, [event.target.name]: event.target.value });
    };

    const handleClickAirline = (data) => {
        console.log('====================================');
        console.log('DATA AIRLINE', data);
        console.log('====================================');
        setChooseAirline(data); // taro data ke local state
        setOpenModal(true);
    };

    const handleUpdateAirline = async (event) => {
        event.preventDefault();

        try {
            const idAirline = chooseAirline.id;
            console.log('====================================');
            console.log('ID AIRLINE YANG AKAN DIUPDATE', idAirline);
            console.log('====================================');

            const dataForm = {
                airline_code: chooseAirline.airline_code,
                airline_name: chooseAirline.airline_name,
            };

            if (!chooseAirline.airline_code || !chooseAirline.airline_name) {
                console.log('Field harus diisi semua!');
                return;
            }

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODg2MTI1NTEsImV4cCI6MTY4ODc4NTM1MX0.hC89EcuiXlPjcDlJYMMEFV7DFzQ4Y3zkdgpXczMnb30';

            const URL_UPDATE = `https://kel1airplaneapi-production.up.railway.app/api/v1/airline/${idAirline}`;
            const response = await axios.put(URL_UPDATE, dataForm, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);

            console.log('============== UPDATE DATA SUCCESS =============');
            // console.log(dataForm);
            setOpenModal(false);
            return response.data;

            // if (res.status == 200 || res.data.status == 'OK') {
            //     // handleVisibleAlert('Berhasil mengubah profil!', 'success');
            //     console.log('Berhasil mengubah profil!', 'success');
            //     setIsLoading(true);
            //     setFetchAirlines(true);
            //     setChangeData(false);
            // }
        } catch (error) {
            console.log('============== UPDATE DATA ERROR =============');
            console.log(error);
        }
    };

    const handleClickDelete = (data) => {
        // console.log('====================================');
        // console.log('DATA AIRLINE', data);
        // console.log('====================================');
        // setChooseAirline(data); // taro data ke local state
        const DataAirlineDel = data;
        try {
            const idAirline = DataAirlineDel.id;
            console.log('====================================');
            console.log('ID AIRLINE YANG AKAN DIDELETE', idAirline);
            console.log('====================================');

            const dataForm = {
                airline_code: DataAirlineDel.airline_code,
                airline_name: DataAirlineDel.airline_name,
            };

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODg2MTI1NTEsImV4cCI6MTY4ODc4NTM1MX0.hC89EcuiXlPjcDlJYMMEFV7DFzQ4Y3zkdgpXczMnb30';

            const URL_UPDATE = `https://kel1airplaneapi-production.up.railway.app/api/v1/airline/${idAirline}`;
            const response = axios.delete(URL_UPDATE, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log('============== DELETE DATA SUCCESS =============');
            console.log('Data yang di delete', dataForm);
            return response.data;
        } catch (error) {
            console.log('============== DELETE DATA ERROR =============');
            console.log(error);
        }
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        if (fetchAirlines) {
            const getAirlines = async () => {
                try {
                    const URL_AIRLINE = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airline';

                    const response = await axios.get(URL_AIRLINE);

                    const airlineData = response.data.data.airline;
                    SetAirlines(airlineData);
                } catch (error) {
                    console.log('ERROR AIRLINE', error);
                }
            };
            getAirlines();
        }
        setFetchAirlines(false);
    }, [fetchAirlines]);
    if (isMounted) {
        return (
            <section className='h-[950px] w-[1440px] bg-grey-2  '>
                <div className=''>
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
                                        <h1 className=' text-[32px] font-bold text-blue-1 '>Airline</h1>
                                        <div className='ml-[262px]'>{/* <TopComponent /> */}</div>
                                    </div>
                                </div>
                            </div>
                            {/* TABLE */}
                            <div className='ml-[351px] mt-[120px] '>
                                <div className='flex items-center'>
                                    <h1 className='ml-[px] text-[21px] font-bold text-blue-1 '>Data Airline</h1>
                                    <div onClick={() => router.push('/airline.new')} className='ml-[670px]' alt=''>
                                        <ButtonAdd />
                                    </div>
                                </div>
                                <div className='mt-[24px]'>
                                    <TableAirline
                                        airlines={airlines}
                                        handleClickAirline={handleClickAirline}
                                        handleClickDelete={handleClickDelete}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {openModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 font-poppins'>
                        <div className='h-[600px] w-[800px] rounded-[20px] bg-white '>
                            <div className='ml-4 mt-6 w-[700px]'>
                                <div className=' flex' onClick={closeModal}>
                                    <div className='flex cursor-pointer flex-row text-blue-1 hover:text-blue-1/90'>
                                        <img className='' src={`./images/back.svg`} />
                                        <span className='ml-[12px] text-[21px] font-bold '>Update Airline</span>
                                    </div>
                                </div>
                                <form onSubmit={handleUpdateAirline}>
                                    <div className='ml-4 mt-5'>
                                        <label htmlFor={'airline_code'} className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                            Kode Airline
                                        </label>
                                        <input
                                            id={'airline_code'}
                                            type='text'
                                            name={'airline_code'}
                                            // value={airlineData.airline_code}
                                            // value={isLoading ? 'Sedang menload data...' : chooseAirline.airline_code}
                                            // disabled={!changeData}
                                            defaultValue={chooseAirline.airline_code}
                                            onChange={handleAirlineData}
                                            className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                            placeholder='SJA'
                                            required=''
                                        />
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <label htmlFor={'airline_name'} className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                            Nama Airline
                                        </label>
                                        <input
                                            id={'airline_name'}
                                            name={'airline_name'}
                                            type='text'
                                            // value={airlineData.airline_name}
                                            // value={isLoading ? 'Sedang menload data...' : chooseAirline.airline_name}
                                            // disabled={!changeData}
                                            defaultValue={chooseAirline.airline_name}
                                            onChange={handleAirlineData}
                                            className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                            placeholder='Super Jet Airline'
                                            required=''
                                        />
                                    </div>
                                    <div className='ml-[600px] mt-[270px]'>
                                        <ButtonSimpan />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    }
}
