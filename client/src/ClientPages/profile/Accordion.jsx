import { useState } from 'react';
import './Accordion.css';



function Accordion() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div >
            {dataInAccordion.map((item, i) => (
                <div className="boxAccordion" key={i}>
                    <div >
                        <div className='row' onClick={() => toggle(i)}>
                            <div className='date'>{item.date}</div>
                            <div className='time'>{item.time}</div>
                            <div className='place'>{item.place}</div>
                            <div className='status'>{item.status}</div>
                            <img className='according' src='assets/accordion.png' alt='accordion' />
                        </div>
                        <div className={selected == i ? 'content show' : 'content'}>
                            {datatreatment.map((itemtreatment, j) => (
                                <div key={j} className='Treatment'>
                                    <div className='treatment'>{itemtreatment.treatment}</div>
                                    <div className='docter'>{itemtreatment.docter}</div>
                                    <div className='price'>{itemtreatment.plice}</div>
                                </div>
                            ))}
                            <div className='totalValue'>
                                <div className='total'>Total value</div>
                                <div className='value'>1,500</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion;

const datatreatment = [
    {
        treatment: 'Treatment',
        docter: 'Docter',
        plice: 'Plice'
    },
    {
        treatment: 'x-rey',
        docter: 'Adam',
        plice: '1,500'
    },
    {
        treatment: 'x-rey',
        docter: 'Bdam',
        plice: '2,500'
    },
    {
        treatment: 'x-rey',
        docter: 'Adam',
        plice: '3,500'
    },
]

const dataInAccordion = [
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
    {
        date: '20/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '27/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Done'
    },
    {
        date: '28/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Miss'
    },
    {
        date: '30/08/2020',
        time: '09.00 AM',
        place: 'Dental life Clinic',
        status: 'Planned'
    },
]
