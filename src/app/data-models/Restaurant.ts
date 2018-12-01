export class Weekday {
    weekday: string;
    ruhetag: boolean;
    open: string;
    close: string;
}

export class Week {
    monday: Weekday;
    tuesday: Weekday;
    wednesday: Weekday;
    thursday: Weekday;
    friday: Weekday;
    saturday: Weekday;
    sunday: Weekday;
}
