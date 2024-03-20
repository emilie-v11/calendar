export interface Event {
  id?: string;
  day: string;
  time: string;
  content: string;
}

export interface Day {
  name: string;
  date: number;
  fullDate: string;
  month: string;
}
