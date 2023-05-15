import { GitHub } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../Styles/projectDisplay.css";

export const ProjectDisplay = () => {
    const {id} = useParams();
    const[data,setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://644578ceb80f57f581badc90.mockapi.io/Projects/" + id);
        const json = await response.json();
        setData(json);
      }
      fetchData();
    },[data])

  return (
    <div className='project'>
        <h1>{data.titulo}</h1>
        <img src={data.image}  alt=''/>
        <p>
           <b>Skills:</b> {data.skills?.join(" - ")} 
        </p>
        <Link to={data.links} target='_blank'>
        <GitHub />
        </Link>
    </div>
  )
}
