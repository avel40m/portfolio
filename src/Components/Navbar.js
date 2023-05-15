import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Styles/navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {
    const [expandNavbar,setxpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() =>{
        setxpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={() => setxpandNavbar(!expandNavbar)}>
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar