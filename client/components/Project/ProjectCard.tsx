import { Project } from '@/interfaces'
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaCheck, FaArrowRightArrowLeft } from 'react-icons/fa6'
import Button from '../common/Button'
import Link from 'next/link'

const ProjectCard: React.FC<Project> = ({
    name,
    status,
    description,
    client,
    id
}) => {
  return (
    <div className='h-92 bg-[#a40e4c] w-64 text-[#F1E8B8] p-6 flex flex-col justify-between gap-y-4 rounded-xl'>
        <h2 className='text-xl font-bold text-center'>{name}</h2>
        <div className='flex flex-col justify-between'>
            <div>Description:</div>
            <div className='flex'>
                <FaArrowCircleRight />
                <p className='ml-2 '>{description}</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <div>Status</div>
            <div className='flex gap-1'>
                <FaCheck className='mt-1 text-green-500'/>
                <p>{status}</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <div>Client</div>
            <p>{client.name}</p>
        </div>
        <div className='mx-auto'>
            <Link href={`/projects/${id}`}>
                <Button label='Click for Details' />
            </Link>
        </div>
    </div>
  )
}

export default ProjectCard