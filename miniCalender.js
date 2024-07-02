let monthNameEL = document.getElementById("month-name");
const dayNameEL = document.getElementById("day-name");
const dayNumEL = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth()

monthNameEL.innerHTML = date.toLocaleString("en", 
    {month: "long"});

dayNameEL.innerHTML = date.toLocaleString("en", 
    {weekday: "long"});

dayNumEL.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();

