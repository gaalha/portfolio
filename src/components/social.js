import React from "react"
import "./glitch.scss"
import { FaGithub, FaTwitter } from 'react-icons/fa';


const Social = () => (
    // <div style={{
    //     marginTop: `20px`,
    //     maxHeight: `50px`,
    //     maxWidth: `300px`,
    //     background: `rgba(0, 0, 0, 0.43)`,
    //     padding: `1rem`,
    //     borderRadius: `25px`
    // }}>
        // <h1 style={{color: `white`, padding: `0`}}> <FontAwesomeIcon icon={faGithub} className="icon-3d"/>
        <h1>
            <a href="https://github.com/edgarMejia">
                <FaGithub className="glitch-svg"/>
            </a>
            <a href="#">
                <FaTwitter className="glitch-svg"/>
            </a>
        </h1>
    // </div>
)

export default Social
