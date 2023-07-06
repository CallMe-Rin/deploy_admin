'use client';

//core
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
//third parties
import axios from 'axios';

//components
import TableAirport from '@/components/TabelAirport';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';
import ButtonSimpan from '@/components/ButtonSimpan';

export default function Airport() {
    //state
    const router = useRouter();

    const [fetchAirport, setFetchAirport] = useState(true);
    const [airports, setAirports] = useState([]);
    const [chooseAirport, setChooseAirport] = useState(null);
    const [airportData, setAirportData] = useState({
        airport_code: '',
        airport_name: '',
        airport_location: '',
    });

    const [isMounted, setIsMounted] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleAirportData = (event) => {
        setAirportData({ ...airportData, [event.target.name]: event.target.value });
    };

    const handleUpdateAirport = async (event) => {
        event.preventDefault();

        try {
            const idAirport = chooseAirport.id;
            console.log('====================================');
            console.log('ID AIRPORT YANG AKAN DIUPDATE', idAirport);
            console.log('====================================');

            const dataForm = {
                airport_code: chooseAirport.airport_code,
                airport_name: chooseAirport.airport_name,
                airport_location: chooseAirport.airport_location,
            };

            if (!chooseAirport.airport_code || !chooseAirport.airport_name || !chooseAirport.airport_location) {
                console.log('Field harus diisi semua!');
                return;
            }

            // const token =
            //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODgzMjk1NzgsImV4cCI6MTY4ODUwMjM3OH0.pi_GiBwEDg-p67aAEB4pncjuw7sHFq1jmQDsk8e1VuQ';

            // const URL_UPDATE = `https://kel1airplaneapi-production.up.railway.app/api/v1/flight/updateflight/${idAirport}`;
            // const response = await axios.put(URL_UPDATE, dataForm, {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // });
            // console.log(response.data);
            console.log('============== UPDATE DATA SUCCESS =============');
            console.log(dataForm);
        } catch (error) {
            console.log('============== UPDATE DATA ERROR =============');
            console.log(error);
        }
    };

    const handleClickAirport = (data) => {
        console.log('====================================');
        console.log('DATA AIRPORT', data);
        console.log('====================================');
        setChooseAirport(data); // taro data ke local state
        setOpenModal(true);
    };

    const handleClickDelete = (data) => {
        const DataAirportDel = data;
        try {
            const idAirport = DataAirportDel.id;
            console.log('====================================');
            console.log('ID AIRPORT YANG AKAN DI DELETE', idAirport);
            console.log('====================================');

            const dataForm = {
                airport_code: DataAirportDel.airport_code,
                airport_name: DataAirportDel.airport_name,
                airport_location: DataAirportDel.airport_location,
               
            };

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODg2MTI1NTEsImV4cCI6MTY4ODc4NTM1MX0.hC89EcuiXlPjcDlJYMMEFV7DFzQ4Y3zkdgpXczMnb30';

            const URL_UPDATE = `https://kel1airplaneapi-production.up.railway.app/api/v1/airport/${idAirport}`;
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
        setIsMounted(true);
    }, []);

    //setup
    useEffect(() => {
        if (fetchAirport) {
            const getAirport = async () => {
                try {
                    const token =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODc5NjA0NTYsImV4cCI6MTY4ODEzMzI1Nn0.v_ktm7kT1I5q_zMQXusG5jvLkW5e9IEz6bvQIb99DH4';
                    const URL_AIRPORT = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airport';

                    const response = await axios.get(URL_AIRPORT);

                    // console.log('RESPONSE AIRPORT', response);
                    // console.log('RESPONSE DATA AIRPORT', response.data);
                    // console.log(' DATA AIRPORT', response.data.data);
                    // console.log(' AIRPORTS', response.data.data.airport);
                    const airportsData = response.data.data.airport;
                    setAirports(airportsData);
                } catch (error) {
                    console.log('ERROR AIRPORT', error);
                }
            };
            getAirport();
        }
        setFetchAirport(false);
    }, [fetchAirport]);

    // console.log('====================================');
    // console.log('AIRPORT', airports);
    // console.log('====================================');
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
                                        <h1 className=' text-[32px] font-bold text-blue-1 '>Airport</h1>
                                        <div className='ml-[262px]'>{/* <TopComponent /> */}</div>
                                    </div>
                                </div>
                            </div>
                            {/* TABLE */}
                            <div className='ml-[361px] mt-[120px] '>
                                <div className='flex items-center'>
                                    {/* <img className='' src={`./images/back.svg`} alt='' /> */}
                                    <h1 className='ml-[px] text-[21px] font-bold text-blue-1 '>Data Airport</h1>
                                    <div onClick={() => router.push('/airport.new')} className='ml-[670px]' alt=''>
                                        <ButtonAdd />
                                    </div>
                                </div>
                                <div className='mt-[24px]'>
                                    <TableAirport airports={airports} handleClickAirport={handleClickAirport} handleClickDelete={handleClickDelete} />
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
                                        <span className='ml-[12px] text-[21px] font-bold '>Update Airport</span>
                                    </div>
                                </div>
                                <form onSubmit={handleUpdateAirport}>
                                    <div className='ml-4 mt-5'>
                                        <label htmlFor={'airport_code'} className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                            Kode Airport
                                        </label>
                                        <input
                                            id={'airport_code'}
                                            type='text'
                                            name={'airport_code'}
                                            defaultValue={chooseAirport.airport_code}
                                            onChange={handleAirportData}
                                            className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                            placeholder='SJA'
                                            required=''
                                        />
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <label htmlFor={'airport_name'} className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                            Nama Airport
                                        </label>
                                        <input
                                            id={'airport_name'}
                                            name={'airport_name'}
                                            type='text'
                                            defaultValue={chooseAirport.airport_name}
                                            onChange={handleAirportData}
                                            className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                            placeholder='Super Jet Airline'
                                            required=''
                                        />
                                    </div>
                                    <div className='ml-4 mt-5'>
                                        <label htmlFor='airport_location' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                            Location
                                        </label>
                                        <input
                                            id={'airport_location'}
                                            name={'airport_location'}
                                            type='text'
                                            defaultValue={chooseAirport.airport_location}
                                            onChange={handleAirportData}
                                            className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                            placeholder='Super Jet Airline'
                                            required=''
                                        />
                                    </div>
                                    <div className='ml-[600px] mt-[200px]'>
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
