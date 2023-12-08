import React from "react";
import Avatar from '../img/IMG_3613.png';
import '../styles/components/sidebar.sass';
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Kelvin Silveira" />
            <p className="title">Software Developer</p>
            <SocialNetworks></SocialNetworks>
            <p>Informações pessoais</p>
            <a href="" className="btn">Download Curriculo</a>

        </aside>
    )
}

export default Sidebar