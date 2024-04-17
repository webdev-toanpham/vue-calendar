export interface CustomDate {
    date: Date,
    isLastMonth?: boolean;
    isThisMonth?: boolean;
    isNextMonth?: boolean;
    isToday?: boolean;
}

function getDatesOfMonth(year: number, month: number) {
    const startDate = new Date(year, month, 1); // Month in JavaScript is 0-indexed
    const endDate = new Date(year, month + 1, 0); // 0 date of the next month is actually the last date of current month

    const fullDates = [];
    for (
        let date = startDate;
        date <= endDate;
        date.setDate(date.getDate() + 1)
    ) {
        fullDates.push(new Date(date));
    }

    return fullDates;
}
function getDatesOfWeek(date: Date) {
    const dayOfWeek = date.getDay();
    const startDate = new Date(date); // Clone the date object
    startDate.setDate(date.getDate() - dayOfWeek); // Set start date to the previous Sunday

    const fullDates = [];
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        fullDates.push(currentDate);
    }
    return fullDates;
}

function mergeDates(datesOfMonth: Date[], datesOfFirstWeek: Date[], dateOfLastWeek: Date[]) {
    const dates: CustomDate[] = datesOfMonth.map((date) => ({
        isThisMonth: true,
        isToday: date.getDate() === new Date().getDate(),
        date: new Date(date),
    }));

    const firstDate = new Date(datesOfMonth[0]);
    for (let i = datesOfFirstWeek.length - 1; i >= 0; i--) {
        const date = new Date(datesOfFirstWeek[i]);
        if (date.getTime() < firstDate.getTime()) {
            dates.unshift({ isLastMonth: true, date: new Date(date) });
        }
    }
    const lastDate = datesOfMonth[datesOfMonth.length - 1];
    dateOfLastWeek.forEach((date) => {
        if (new Date(date).getTime() > lastDate.getTime()) {
            dates.push({ isNextMonth: true, date: new Date(date) });
        }
    });
    return dates;
}

export function getFullDatesOfMonth(year: number, month: number) {
    const datesOfMonth = getDatesOfMonth(year, month);
    const datesOfFirstWeek = getDatesOfWeek(datesOfMonth[0]);
    const datesOfLastWeek = getDatesOfWeek(datesOfMonth[datesOfMonth.length - 1]);
    return {
        month: month + 1,
        year,
        dates: mergeDates(datesOfMonth, datesOfFirstWeek, datesOfLastWeek)
    };
}

export function compareDate(date1?: CustomDate, date2?: CustomDate) {
    return date1?.date.getDate() === date2?.date.getDate() && date1?.date.getMonth() === date2?.date.getMonth() && date1?.date.getFullYear() === date2?.date.getFullYear()
}

export const weekDays: { long: string; short: string; value: number }[] = [
    { value: 0, long: 'Sunday', short: "Su" },
    { value: 1, long: 'Monday', short: "Mo" },
    { value: 2, long: 'Tuesday', short: "Tu" },
    { value: 3, long: 'Wednesday', short: "We" },
    { value: 4, long: 'Thursday', short: "Th" },
    { value: 5, long: 'Friday', short: "Fr" },
    { value: 6, long: 'Saturday', short: "Sa" },
]