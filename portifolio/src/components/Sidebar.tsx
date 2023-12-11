
import Avatar from '../img/IMG_3613.png';
import '../styles/components/sidebar.sass';
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import curricolo from '../components/currículo Canoas.docx.pdf'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Kelvin Silveira" />
            <p className="title">Software Developer</p>
            <SocialNetworks></SocialNetworks>
            <InformationContainer></InformationContainer>
            <a href={curricolo} target='_blank' className="btn">Download Curriculo</a>

        </aside>
    )
};

export default Sidebar;