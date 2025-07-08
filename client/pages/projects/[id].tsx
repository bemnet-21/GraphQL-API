import { GET_PROJECT_BY_ID} from '@/graphql/queries'
import { Project } from '@/interfaces'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import Link from 'next/link'

const Details: React.FC= () => {
  
  const router = useRouter()
  const {id} = router.query 
  const {data, error, loading } = useQuery<{project: Project}>(GET_PROJECT_BY_ID, {
    variables: {
        id
    }
  })
  const project = data?.project
  console.log("Project: ", project)

  
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <section className='min-h-screen  bg-[#f1e8b8] w-full py-16'>
        <div className='h-fit w-sm  mx-auto pb-6 flex flex-col rounded-2xl bg-[#a40e4c] text-[#f1e8b8] sm:w-xl md:w-3xl'>
            <div className='text-4xl font-bold text-center p-6'>
                {project?.name}
            </div>
            <div className='flex flex-col pl-16  w-[80%]'>
                <div className='text-3xl font-semi-bold'>Description </div>
                <hr className='w-1/2' />
                <div className='text-lg font-semibold ml-4'>{project?.description}</div> 
            </div>
            <div className='flex flex-col pl-16 w-[80%]'>
                <div className='text-3xl font-semi-bold'>Status</div>
                <hr className='w-1/2'/>
                <div className='flex text-lg font-semibold ml-4 gap-x-2'>
                    <FaCircleCheck className='mt-1 text-green-700'  />
                    <div>{project?.status}</div>
                </div>
            </div>
            <div className='flex flex-col pl-16  w-[80%]'>
                <div className='text-3xl font-semi-bold'>Client </div>
                <hr className='w-1/2' />
                <div className='text-lg font-semibold ml-4'>{project?.client.name.toUpperCase()}</div> 
            </div>
            <div className='flex flex-col pl-16  w-[80%]'>
                <div className='text-3xl font-semi-bold'>Phone </div>
                <hr className='w-1/2' />
                <div className='text-lg font-semibold ml-4'>{project?.client.phone}</div> 
            </div>
            <div className='flex flex-col pl-16  w-[80%]'>
                <div className='text-3xl font-semi-bold'>Email </div>
                <hr className='w-1/2' />
                <div className='text-lg font-semibold ml-4'>{project?.client.email}</div> 
            </div>
        </div>
        <div className='flex justify-center gap-x-5'>
            <Link href="/projects/addProject" className="block mt-6 text-center text-black underline">
          <button className='text-[#F1E8B8] w-fit bg-[#a40e4c] rounded-full px-3 py-1 shadow-lg transition-transform duratio hover:bg-[#aa5679] hover:scale-105'>
            Update
          </button>
        </Link>
        <Link href="/projects/addProject" className="block mt-6 text-center text-black underline">
          <button className='text-[#F1E8B8] w-fit bg-[#a40e4c] rounded-full px-3 py-1 shadow-lg transition-transform duratio hover:bg-[#aa5679] hover:scale-105'>
            {
                (project?.status === "completed") ? "Completed" : "Mark as Complete"
            }
          </button>
        </Link>
        </div>
    </section>
  )
}

export default Details