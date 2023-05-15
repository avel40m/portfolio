import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectItem({id,image,title}) {
  const navigate = useNavigate();
  return (
    <div className='projectItem'
    onClick={() => {
      navigate(`/project/${id}`)
    }}
    >
        <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
        <h1>{title}</h1>
    </div>
  )
}
