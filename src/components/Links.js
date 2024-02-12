import React from 'react'

const Links = ({response}) => {
  return (
    <div className='flex justify-between'>
         <p className='text-sm font-semibold'>{response.type}:  </p>
        <a href={response.url} className="font-semibold underline text-blue-500 hover:text-blue-400">{response.name}</a>
    </div>
  )
}

export default Links