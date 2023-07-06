'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import axios from 'axios';

import TableTransaction from '@/components/TableTransaction';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';

export default function Transaction() {
    const [fetchTransaction, setFetchTransaction] = useState(true);
    const [transaction, setTransaction] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (fetchTransaction) {
            const getTransaction = async () => {
                try {
                    const token =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODc5NjA0NTYsImV4cCI6MTY4ODEzMzI1Nn0.v_ktm7kT1I5q_zMQXusG5jvLkW5e9IEz6bvQIb99DH4';
                    const URL_TRANSC = 'https://kel1airplaneapi-production.up.railway.app/api/v1/transaction/history';

                    const response = await axios.get(URL_TRANSC, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    console.log('RESPONSE TRANSACTION', response);
                    console.log('RESPONSE DATA TRANSACTION', response.data);
                    // console.log(' DATA USER', response.data.data);
                    // console.log(' DATA USER', response.data.data.users);

                    // const usersData = response.data.data.users;
                    // setUsers(usersData);
                } catch (error) {
                    console.log('ERROR USER', error);
                }
            };
            getTransaction();
        }
        setFetchTransaction(false);
    }, [fetchTransaction]);

    // console.log('====================================');
    // console.log('USERS', users);
    // console.log('====================================');
    if (isMounted) { 
        return (
            <section className='h-[950px] w-[1440px] bg-grey-2  '>
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
                                        <h1 className=' text-[32px] font-bold text-blue-1 '>Transaction</h1>
                                        <div className='ml-[158px]'>
                                            <TopComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABLE */}
                            <div className='ml-[361px] mt-[120px] '>
                                <div className='flex'>
                                    <h1 className=' text-[21px] font-bold text-blue-1 '>Data Transaction</h1>
                                </div>
                                <div className='mt-[24px] '>
                                    <TableTransaction />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        );
    
    }
}
