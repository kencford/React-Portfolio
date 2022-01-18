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
                <img src={github} alt="Ken-Github" />
            </a>
            <a
                className="icon"
                href="https://www.facebook.com/ken.crawford.3114"
            >
                <img src={facebook} alt="Ken-Facebook" />
            </a>


        </div>
    )
}

export default Footer;