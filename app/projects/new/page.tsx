"use client"

import { Navbar, ProjectForm } from '@/components'
import React, { useState } from 'react'

function page() {

  return (
    <>
    <Navbar/>
    <main className='overflow-hidden'>
      <div className='bg-white flex-1 my-11 rounded-xl p-4 drop-shadow-lg'>
        <h1 className='text-3xl font-semibold pl-11 pt-11'>Create Project</h1>
        <ProjectForm/> 
      </div>
    </main>
    </>
  )
}

export default page