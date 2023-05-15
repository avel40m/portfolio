import React from 'react'
import { Instagram,Twitter,Facebook,LinkedIn } from '@material-ui/icons'
import '../Styles/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram />
            <Twitter />
            <Facebook />
            <LinkedIn />
        </div>
        <p>&copy; 2023 Avelino Mendez</p>
    </div>
  )
}

export default Footer