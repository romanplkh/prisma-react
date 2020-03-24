import React from 'react'
import './footer.scss'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer">
            &copy; Pelikh Roman, {year}
        </div>
    )
}


export default Footer;