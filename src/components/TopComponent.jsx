'use client';

import Image from 'next/image';
import Cari from '../../public/images/Search.svg';
import Notif from '../../public/images/bell.svg';
import Setting from '../../public/images/gear.svg';
import Box from '../../public/images/codesandbox.svg';

export default function () {
    return (
        <main>
            <div className='flex items-center'>
                {/* Search */}
                <form className='w-[350px]  '>
                    <label htmlFor='default-search' className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Search
                    </label>
                    <div className='relative '>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[32px]'>
                            <Image className='p-' src={Cari} />
                        </div>
                        <input
                            type='search'
                            id='default-search'
                            className=' w-full rounded-full border-none bg-white p-4 pl-[80px] text-sm'
                            placeholder='Search here...'
                            required=''
                        />
                        <button
                            type='submit'
                            className='absolute bottom-2.5 right-2.5 rounded-lg bg-blue-1 px-4 py-2 text-sm font-medium text-white hover:bg-blue-1/90 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                            Search
                        </button>
                    </div>
                </form>

                {/* Notification */}
                <button type='button'>
                    <div className='ml-[10px] flex h-[60px] w-[60px] rounded-full bg-white p-[14px]'>
                        <Image className='' src={Notif} />
                    </div>
                </button>
                {/* Setting */}
                <button type='button'>
                    <div className='ml-[10px] flex h-[60px] w-[60px] rounded-full bg-white p-[14px]'>
                        <Image className='' src={Setting} />
                    </div>
                </button>

                {/* Detail User */}
                <div className='flex h-[60px] w-[170px]'>
                    <div className='ml-[15px] flex w-full items-center '>
                        <div className=''>
                            <span className='text-sm font-bold text-blue-1 '>Beni Tiyas K</span>
                            <div>
                                <span>Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[10px] h-[60px] w-[60px] rounded-full bg-grey-1 p-[18px]'>
                        <div className='w-[24px]'>
                            <Image src={Box} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
