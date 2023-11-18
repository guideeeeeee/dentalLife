import React, { useState } from 'react';
import moment from 'moment';
import chevronLeft from "/assets/chevron_left_FILL0_wght400_GRAD0_opsz24.png";
import chevronRight from "/assets/chevron_right_FILL0_wght400_GRAD0_opsz24.png";
import "./SDcalendar.css";
import { renderCalendar } from '../../data/RenderCalendar';
import axios from 'axios';
import { getuuid } from '../../../service/authorize';
const timeAvailable = ["11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm", "02:00 pm",
    "02:30 pm", "03:00 pm", "03:30 pm", "04:00 pm", "04:30 pm", "05:00 pm", "05:30 pm", "06:00 pm", "06:30 pm"];


function SDcalendar({ Time, date }) {
    const [currentDate, setCurrentDate] = useState(moment());
    const gendate = renderCalendar(currentDate);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [timenotavailable, settimenot] = useState({ time: [] });
    const uuid = getuuid()
    const handleDateClick = async (day) => {
        setSelectedDate(day);
        setSelectedTime(null);
        date(day);
        try {
            const response = await axios.post("http://localhost:3001/api/dataSheduling", { date: day, id: uuid });
            // console.log(response.data);
            const notAvailableTimes = response.data.map(item => item.TimeOfScheduling);
            settimenot({ time: [...notAvailableTimes] });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleTimeClick = (time) => {
        setSelectedTime(time);
        // console.log(time);
        Time(time);
    };
    const isTimeSlotAvailable = (time) => {
        return !timenotavailable.time.includes(time);
    };
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return (
        <div>
            <div className="headCalenn">
                <h5>{currentDate.format('MMMM YYYY')}</h5>
                <div className="inGridd">
                    <button onClick={() => setCurrentDate(moment(currentDate).subtract(1, 'month'))} type="button">
                        <img src={chevronLeft} alt="Left Arrow" />
                    </button>
                    <button onClick={() => setCurrentDate(moment(currentDate).add(1, 'month'))} type="button">
                        <img src={chevronRight} alt="Right Arrow" />
                    </button>
                </div>
            </div>
            <div className="CT-inGridd">
                <div className="calendar-dayss">
                    {dayNames.map(day => (
                        <div key={day} className="calendar-day-namee">
                            {day}
                        </div>
                    ))}
                    {gendate.emptydate.map((empty, index) => (
                        <div key={`empty${index}`} className="empty">
                            {empty}
                        </div>
                    ))}
                    {gendate.date.map((date, index) => (
                        <div key={gendate.id[index]} className={`calendar-dayy ${selectedDate === gendate.id[index] ? 'selectedd' : ''}`}
                            onClick={() => handleDateClick(gendate.id[index])}>
                            {date}
                        </div>
                    ))}
                </div>
                <div className="timeGridd">
                    {timeAvailable.map(time => (
                        <div
                            key={time}
                            className={`time-ALL  ${selectedTime === time ? 'selectedd' : ''} ${isTimeSlotAvailable(time) ? '' : 'unavailablee'}`}
                            onClick={() => {
                                if (isTimeSlotAvailable(time)) {
                                    handleTimeClick(time);
                                }
                            }}>
                            {time}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SDcalendar;
