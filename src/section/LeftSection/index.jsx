import Hearder from "../Header"
import Navbar from "../Navbar"
import Contact from "../Contact"

const LeftSection = () => {
    return (

        <div className='px-5'>
            <div className='sticky top-14 grid gap-y-4 lg:grid-rows-[35%_40%_25%] h-[90vh]'>
                <Hearder />
                <Navbar />
                <Contact />
            </div>
        </div>

    )
}

export default LeftSection