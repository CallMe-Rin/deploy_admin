export const getDateInRange = (startDate, endDate) => {
    const date = new Date(startDate.getTime());
    let angka = 1;
    const dates = [];

    while (date <= endDate) {
        dates.push({
            id: angka + dates.length,
            date: new Date(date),
            active: false,
        });

        date.setDate(date.getDate() + 1);
    }

    return dates;
};
