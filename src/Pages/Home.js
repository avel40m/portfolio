import React, { useEffect, useState } from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import '../Styles/home.css';
import { ThreeDots } from "react-loader-spinner";
import { Link } from 'react-router-dom';


export const Home = () => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch("https://644578ceb80f57f581badc90.mockapi.io/Tools/");
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    }
    fetchData();
  },[])
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Avel</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating
          </p>
          <Link to={"https://www.linkedin.com/in/avelino-mendez/"} target='_blank'>
          <LinkedIn />
          </Link>
          <Link to={"https://mail.google.com/mail/u/0/#inbox"} target='_blank'>
          <Email />
          </Link>
          <Link to={"https://github.com/avel40m"} target='_blank'>
          <GitHub />
          </Link>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
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
        <ol className='list'>
          {
            data.map(tools => (
              <li className='item' key={tools.id}>
                <h2>{tools.title}</h2>
                <span>{tools.skills?.join(", ")}</span>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}
