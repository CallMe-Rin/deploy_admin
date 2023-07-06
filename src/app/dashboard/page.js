'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import axios from 'axios';

import TableUser from '@/components/TableUser';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';

export default function dashboard() {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (isMounted) { 
        return (
            <section className='h-[950px] w-[1440px] bg-grey-2  '>
                <nav className=''>
                    <Aside/>
                </nav>
            </section>
        );
    
    }
}
