import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

const Header = () => {

    const router = useRouter()

    const color = router.pathname === '/' ? "bg-[#F1E8B8] text-[#a40e4c]" : "text-[#F1E8B8] bg-[#a40e4c]";

    
  return (
    <header className={`${color} h-18 w-full flex justify-between items-center text-2xl font-bold px-4 sm:px-12 md:px-16`}>
        <Link href="/"><h1>Logo</h1></Link>
        <div className='flex justify-between gap-x-6 text-lg flex-col font-semibold md:flex-row md:text-2xl md:font-bold' >
            <Link href='/projects/addProject'>
              <h1>Add Project</h1>
            </Link>
            <Link href='/clients/addClient'>
              <h1>Add Client</h1>
            </Link>
        </div>
    </header>
  )
}

export default Header