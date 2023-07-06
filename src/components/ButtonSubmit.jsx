'use client';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function ButtonSubmit() {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (isMounted) {
        return (
            <nav className=''>
                <button
                    type='submit'
                    className='h-[43px] w-[110px] rounded-full  bg-blue-1 text-white hover:bg-blue-1/90 hover:text-white '>
                    <div className='align-center flex justify-center '>
                        <p className='m-[10px]'>Submit</p>
                    </div>
                </button>
            </nav>
        );
    
     }
}