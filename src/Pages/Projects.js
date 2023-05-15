import React, { useEffect, useState } from 'react';
import ProjectItem from '../Components/ProjectItem';
import "../Styles/projects.css";
import { ThreeDots } from "react-loader-spinner";


export const Projects = () => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [options,setOptions] = useState([]);
  const [select,setSelect] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      async function fetchData() {
        const response = await fetch("https://644578ceb80f57f581badc90.mockapi.io/Projects/");
        const data = await response.json();
        setIsLoading(false)
        const uniqueData = data.map(value => value.tecnologia)
        setSelect(uniqueData.filter((value,index) => uniqueData.indexOf(value) === index));
        setData(data);
        setOptions(data);
      }
      fetchData();
    }
    fetchData();
  },[])

  const handleFilter = (name) => {
    setIsLoading(true)
    setData([])
    setTimeout(() => {
      name === 'all' ?
      setData(options)
      :
       setData(options.filter(d => d.tecnologia === name))
      setIsLoading(false)
    },1000)
  }
console.log(select);
  return (
    <div className='projects'>
      <h1>My personal Projects</h1>
      <div>
        <ul className='optiones'>
          <li onClick={() => handleFilter('all')}>All</li>
          {
           select.map((value,index) => <li key={index} onClick={() => handleFilter(value)}>{value}</li>)
          }
        </ul>
      </div>
        {
          isLoading && <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#394867" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
           />
        }
      <div className='projectList'>
        {
          data.map((project,index) =>{
            return <ProjectItem key={index} id={project.id} title={project.titulo} image={project.image}/>
          })
        }
      </div>
    </div>
  )
}
