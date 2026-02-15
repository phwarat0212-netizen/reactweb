import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Material = ({ isHighlight, icon, link }) => {
    return (
        <div className="flex gap-2 text-xl">
            <a href={link} target="_blank" className="hover:text-white"><FontAwesomeIcon icon={icon} /></a>
        </div>
    )
}

export default Material