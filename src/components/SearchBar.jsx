'use client';
import { FiSearch } from 'react-icons/fi';
import Input from './Input';

export default function SearchBar() {
    return (
        <div className='relative w-[444px]'>
            <Input
                className='text-neu-4 rounded-rad-4 border-net-6 bg-net-6 py-[14px] pl-6 pr-12 font-poppins text-body-6 font-normal'
                placeholder={'Cari di sini ...'}
            />
            <FiSearch className='absolute right-0 top-1/2 mr-6 h-6 w-6 translate-y-[-50%] text-net-3' />
        </div>
    );
}
