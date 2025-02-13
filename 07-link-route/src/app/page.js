
import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='bg-slate-900 h-screen flex items-center justify-center text-white flex-col gap-4'>
      <p>
        Home
      </p>
      <Link href="/about" className='bg-red-500 text-white py-2 px-8 cursor-pointer'>About</Link>
    </div>
  )
}
