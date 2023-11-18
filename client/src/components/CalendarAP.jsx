import React, { useState,useEffect } from 'react';
import moment from 'moment';
import chevronLeft from "/assets/chevron_left_FILL0_wght400_GRAD0_opsz24.png";
import chevronRight from "/assets/chevron_right_FILL0_wght400_GRAD0_opsz24.png";
import "./CalendarAp.css";
import { renderCalendar } from '../data/RenderCalendar';
import { AddDate, Addtime } from '../store/slices/BookingSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
const timeAvailable = ["11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm", "02:00 pm",
    "02:30 pm", "03:00 pm", "03:30 pm", "04:00 pm", "04:30 pm", "05:00 pm", "05:30 pm", "06:00 pm", "06:30 pm"];


function Calendar() {
    const dispatch = useDispatch();
    const [currentDate, setCurrentDate] = useState(moment());
    const gendate = renderCalendar(currentDate);
    const [selectedDate, setSelectedDate] = useState(useSelector((state) => state.Booking.date));
    const [selectedTime, setSelectedTime] = useState(useSelector((state) => state.Booking.time));
    const handleDateClick = async(day) => {
        setSelectedDate(day);
        setSelectedTime(null);
        // console.log(currentDate.format('YYYY-MM-DD'));
        // console.log(selectedTime);
        dispatch(AddDate(day));
        
    };
    const [timenotavailable,settimenot] = useState({ time: [] });
    useEffect(() => {
        const fetchTimeAvailability = async () => {
            try {
                const response = await axios.post("http://localhost:3001/api/timebook", { date: selectedDate });
                // console.log(response.data);
                const data = response.data;
                const notAvailableTimes = data.filter(item => item.status === "Not Complete").map(item => item.time);
                settimenot({ time: [ ...notAvailableTimes] }); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (selectedDate) {
            fetchTimeAvailability();
        }
    }, [selectedDate]);
    const handleTimeClick = (time) => {
        setSelectedTime(time);
        // console.log(time);
        dispatch(Addtime(time))
    };
    const isTimeSlotAvailable = (time) => {

        return !timenotavailable.time.includes(time); 
    };

    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div>
            <div className="headCalen">
                <h5>{currentDate.format('MMMM YYYY')}</h5>
                <div className="inGrid">
                    <button onClick={() => setCurrentDate(moment(currentDate).subtract(1, 'month'))} type="button">
                        <img src={chevronLeft} alt="Left Arrow" />
                    </button>
                    <button onClick={() => setCurrentDate(moment(currentDate).add(1, 'month'))} type="button">
                        <img src={chevronRight} alt="Right Arrow" />
                    </button>
                </div>
            </div>
            <div className="CT-inGrid">
                <div className="calendar-days">
                    {dayNames.map(day => (
                        <div key={day} className="calendar-day-name">
                            {day}
                        </div>
                    ))}
                    {gendate.emptydate.map((empty, index) => (
                        <div key={`empty${index}`} className="empty">
                            {empty}
                        </div>
                    ))}
                    {gendate.date.map((date, index) => (
                        <div key={gendate.id[index]} className={`calendar-day ${selectedDate === gendate.id[index] ? 'selected' : ''}`}
                            onClick={() => handleDateClick(gendate.id[index])}>
                            {date}
                        </div>
                    ))}
                </div>
                <div className="timeGrid">
                    {timeAvailable.map(time => (
                        <div
                            key={time}
                            className={`time-AL  ${selectedTime === time ? 'selected' : ''} ${isTimeSlotAvailable(time) ? '' : 'unavailable'}`}
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

export default Calendar;
