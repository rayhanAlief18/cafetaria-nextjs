import React from 'react'

export default function Size() {
    return (
        <div className='absolute inset-x-0 text-white'>
                        <p className='sm:pl-10 sm:mb-3'>Select Size</p>
                        <div className='flex flex-wrap gap-5 justify-center items-center flex-row'>
                            <button className='border rounded-full bg-green-800 text-white sm:py-2 sm:px-6'>
                                Small
                            </button>
                            <button className='border rounded-full bg-green-800 text-white sm:py-2 sm:px-6'>
                                Medium
                            </button>
                            <button className='border rounded-full bg-green-800 text-white sm:py-2 sm:px-6'>
                                Large
                            </button>
                        </div>
                    </div>
    )
    }
