import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from '../../assets/fullst.jpg'
import pic2 from '../../assets/nasa1.jpg'
import { useState } from "react";
import { faArrowLeft, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "../../components/FormattedDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";
import { data } from "../../contents/experience";

const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    return (
        <div className="">
            <div className="text-primaryAccent font-medium ">Experience</div>
            {/* {
                data.map(() => {
                    
                })
            } */}
            <div className={`grid grid-cols-[25%_75%] rounded-md px-2 py-3 transition-all ${isMouseEnter['exp1'] ? "bg-gray-200" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
            >
                <div>
                    <FormattedDate isHighlight={isMouseEnter}>2023-2024</FormattedDate>
                    <Picture picture={pic} title="fullstack" />
                </div>
                <div className="grid gap-y-3">
                   <TitleLink isHighlight={isMouseEnter['exp1']} title="Fullstackkk" link="https://github.com/phwarat0212-netizen/reactweb" />
                   <div className="flex gap-2 text-xl">
                        <Material isHighlight={isMouseEnter['exp1']} icon={faGithub} link="https://github.com/phwarat0212-netizen/reactweb" />
                        <Material isHighlight={isMouseEnter['exp1']} icon={faYoutube} link="https://www.youtube.com/" />
                   </div>
                    <Description description="Fullstackkk · Sport Analysis System
Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers." />
                    <Tech isHighlight={isMouseEnter['exp1']} data={['C', 'C++', 'C#', 'Java', 'Python', 'lua']} />
                </div>
            </div>
        </div>




    )
}

export default Experience