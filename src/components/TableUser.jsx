'use client';

export default function TableUser({ users }) {
    // console.log('====================================');
    // console.log('INI DATA KOMPONEN BRE', users);
    // console.log('====================================');
    return (
        <nav className=' w-[1046] overflow-x-auto border-b border-gray-200 bg-white shadow-md sm:rounded-lg'>
            <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className='min-w-full'>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='px-6 py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='px-6 py-4'>
                                        Nama
                                    </th>
                                    <th scope='col' className='px-6 py-4'>
                                        Email
                                    </th>
                                    <th scope='col' className='px-6 py-4'>
                                        Phone
                                    </th>
                                    <th scope='col' className='px-6 py-4 '>
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length ? (
                                    users.map((users, index) => {
                                        return (
                                            <tr key={index} className='border-b text-center text-[14px] font-normal text-black '>
                                                <td className='whitespace-nowrap px-6 py-4'>{index + 1}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{users.nama}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{users.email}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{users.phone}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{users.role}</td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <div>
                                        <h1>Loading....</h1>
                                    </div>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
