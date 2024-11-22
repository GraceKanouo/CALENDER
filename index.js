let currentDate = new Date();
let currentMonth = currentDate.getMonth(); 
let currentYear = currentDate.getFullYear(); 

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


function generateCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = ''; 

    
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        calendarBody.appendChild(dayElement);
    });

    
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        calendarBody.appendChild(emptyCell);
    }

    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        
        if (day === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
            dayElement.classList.add('current-day');
        }

        calendarBody.appendChild(dayElement);
    }

    
    document.getElementById('month-year').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    document.getElementById('current-date').textContent = `${monthNames[currentMonth]} ${currentYear}`;
}


function changeMonth(offset) {
    currentMonth += offset;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}


window.onload = generateCalendar;