import React from 'react'
import facebook from '../icons/facebook-icon.png'
import github from '../icons/linkedin-icon.png'

function Footer() {
    return (
        <div className="footer">
            <a
                className="icon"
                href="https://github.com/kencford"
            >
                <img src={github} alt="github-ken" />
            </a>


        </div>
    )
}

export default Footer;