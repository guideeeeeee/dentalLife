import './BoxAPMhis.css'
import Accordion from './Accordion'

function BoxAPMhis() {
    return (
        <div className='boxflex'>
            <div className='p'>
                Appointment history
                {/* <div className='addnew'>Add new</div> */}
            </div>
            <div className="boxAPM">
                <div className='section'>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Place</li>
                    <li>Status</li>
                </div>
                <div className='flexx'>
                    <Accordion />
                </div>
            </div>
        </div>

    )
}

export default BoxAPMhis;