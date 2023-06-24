class DateUtils {
    public static timeToDate(time: string = "00:00:00"): Date {
        const [hour, minute, seconds] = time.split(":");

        const date = new Date();
        date.setHours(Number(hour), Number(minute), Number(seconds));

        return date;
    }

    public static addMinutes(date: Date, minutes: number) {
        return new Date(date.getTime() + minutes * 60 * 1000);
    }
}

export default DateUtils;
