import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div className='bg-slate-900 h-screen flex items-center justify-center text-white flex-col gap-4'>
        <p>
          About
        </p>
        <Link href="/" className='bg-red-500 text-white py-2 px-8 cursor-pointer'>Home</Link>
      </div>
    )
}
