import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const TitleLink = ({ isHighlight, title, link }) => {
    if (!link) {
        return (
             <div className={`text-sm ${isHighlight ? "text-lime-700" : ""}`}>
            {title}
        </div>
        )
    }

    return (
        <div className={`text-sm ${isHighlight ? "text-lime-700" : ""}`}>
            <a href={link} target="_blank" className="hover:text-white">
            {title}
            <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ${isHighlight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
     )
    
       
}

export default TitleLink