import { Hero, Navbar } from '@/components'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <main className='overflow-hidden'>
      <Hero/>
    </main>
    </>
  )
}

export default page