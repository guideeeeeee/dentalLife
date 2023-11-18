import moment from 'moment';


export const renderCalendar = (currentMonth) => {
    const daysInMonth = moment(currentMonth).daysInMonth();
    const firstDayOfMonth = moment(currentMonth).date(0);
    let calendar = {
        id:[], 
        date:[],
        time:[],
        emptydate:[],
    };
    for (let i = 0; i < firstDayOfMonth.day(); i++) {
        calendar.emptydate.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const IdDate = moment(currentMonth).date(i).format('YYYY-MM-DD');
        calendar.id.push(IdDate);
        calendar.date.push(i);
    }
    console.log(calendar)
    return calendar;
};


