import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'

const Hearder = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl text-primaryTitle'>{data.name}</div>
            <div className='text-primaryAccent font-semibold'>{data.title}</div>
            <div className='text-sm w-5/6'>{data.caption}</div>
            <div className='mt-3'>
                <a href={data.link} target='_blank' rel='noopener noreferrer'>
                    <span className='bg-primaryTitle text-white px-4 py-2 rounded-md'>
                        View Resume
                        <span className='rotate-90 inline-block ml-2'>
                            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Hearder