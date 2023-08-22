import React from 'react'

function Footer() {
    return (
        <>
        <div className='bg-black mx-auto px-36 flex justify-between'>
            <div className='pt-28 pb-24'>
                <h1 className='text-white text-3xl font-semibold'>Horizenaid</h1>
            </div>
            <div className='flex justify-between my-16'>
                <div className='px-11'>
                    <h2 className='text-white text-xl font-semibold'>Fundraise for</h2>
                    <ul className='text-white'>
                        <li>Education</li>
                        <li>Health</li>
                        <li>Business</li>
                        <li>Non-profit</li>
                        <li>Crisis relief</li>
                    </ul>
                </div>
                <div className='px-11'>
                    <h2 className='text-white text-xl font-semibold'>Support</h2>
                    <ul className='text-white'>
                        <li>About us</li>
                        <li>Our rules</li>
                        <li>Help center</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='px-11'>
                    <h2 className='text-white text-xl font-semibold'>Follow us</h2>
                    <ul className='text-white'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-black text-white font-semibold flex justify-center'>
            Copyright © Horizenaid 2023
        </div>
        </>
    )
}

export default Footer