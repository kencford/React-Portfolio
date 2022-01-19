import React from 'react'
import github from '../icons/GitHub_Logo.png'
import linkedIn from '../icons/linkedin-icon.png'

function Footer({currentPage, handlePageChange}) {
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
                href="https://www.linkedin.com/in/crawfordken/"
            >
                <img src={linkedIn} alt="Ken-Facebook" />
            </a>


        </div>
    )
}

export default Footer;