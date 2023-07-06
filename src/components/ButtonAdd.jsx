'use client';
import Tambah from '../../public/images/tambah.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function ButtonAdd() {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (isMounted) {
        return (
            <nav className=''>
                <button 
                    type='button'
                    className='h-[43px] w-[122px] rounded-full  bg-blue-1 text-white hover:bg-blue-1/90 hover:text-white '>
                    <div className='align-center flex justify-center px-[20px]'>
                        <Image className='' src={Tambah} alt='' />
                        <p className='m-[10px]'>Tambah</p>
                    </div>
                </button>
            </nav>
        );
    
     }
}
