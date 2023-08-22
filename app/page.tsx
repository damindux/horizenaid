import { Hero, Navbar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="overflow-hidden">
        <Hero/>
      </main>
    </>
    
  )
}
