import React from 'react'
import Link from 'next/link'

export default function OpenSanook() {
  return (
    <div className="my-4">
      <Link href="https://www.sanook.com" className='text-blue-500 hover:text-red-800  border-2 
                                                     px-4 py-2
                                                     border-blue-500 rounded-lg'>
        Open Sanook.com
      </Link>
    </div>
  )
}
