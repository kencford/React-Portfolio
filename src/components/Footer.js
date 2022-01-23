import React from 'react'
import github from '../icons/GitHub_Logo.png'
import linkedIn from '../icons/linkedin-icon.png'

function Footer({currentPage, handlePageChange}) {
    return (
        <div className="footer text-end mt-5">
            <div className='container' >
            <a
                className="icon"
                href="https://github.com/kencford"
            >
                <img src={github} style={{
                    width: "75px",
                    height: "50px"
                }}alt="Ken-Github" />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
                className="icon pr-5"

                href="https://www.linkedin.com/in/crawfordken/"
            >
                <img src={linkedIn} style={{
                    width: "50px",
                    height: "50px"
                }} alt="Ken-LinkedIn"
                />
            </a>
            </div>


        </div>
    )
}

export default Footer;