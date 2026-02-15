import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    return (
        <div className='flex items-end'>
            <div className='flex items-end gap-2 text-2xl py-4'>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryAccent transition-transform duration-200' icon={faInstagram} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryAccent transition-transform duration-200' icon={faGithub} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryAccent transition-transform duration-200' icon={faFacebook} />
            </div>
        </div>
    )
}

export default Contact