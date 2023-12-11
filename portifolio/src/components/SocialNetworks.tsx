import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import'../styles/components/socialnetworks.sass';




const socialNetworks = [
    {hrfe:"https://www.linkedin.com/in/kelvin-silveira-946127181/", name: "linkedin", icon: <FaLinkedinIn /> },
    {hrfe:"https://github.com/VonDerLitch",name: "github", icon: <FaGithub /> },
    {hrfe:"https://www.instagram.com/niflheim_morke/",name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.hrfe} target="_blanc" className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
            

            
        ))}
    </section>
}

export default SocialNetworks
