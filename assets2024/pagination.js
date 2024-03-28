const TARGET_DAY = 1;

const root = document.querySelector('.pagination');
const elements = root.querySelectorAll('.links__item');
const today = new Date();

const getClosestDay = (date, target) => {
    const initialDate = date.getDate();
    const initialDay = date.getDay();
    let daysUntilGoalDay = target - initialDay;

    if (daysUntilGoalDay < 0) {
        daysUntilGoalDay +=7;
    }

    const closestDay = new Date(date);
    
    return new Date(closestDay.setDate(initialDate + daysUntilGoalDay));
}

const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear() % 100;

    return `${day}.${month}.${year}`;
}

const initPagination = () => {
    document.addEventListener('DOMContentLoaded', () => {
        elements.forEach(element => {element.textContent *= 2});
        elements[0].textContent += ` ${formatDate(getClosestDay(today, TARGET_DAY))}`;
    });
}

initPagination();
