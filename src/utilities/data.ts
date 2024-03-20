export const getWeekDays = () => {
  const now = new Date();
  const firstDayOfWeek =
    now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1); // for start monday
  const weekDays = Array.from({ length: 7 }).map((_, index) => {
    const day = new Date(now.setDate(firstDayOfWeek + index));
    return {
      name: new Intl.DateTimeFormat('fr-FR', { weekday: 'short' }).format(day),
      date: day.getDate(),
      fullDate: day.toISOString().split('T')[0], // Format YYYY-MM-DD 
      month: new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(day),
    };
  });
  return weekDays;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'short',
    day: 'numeric', 
    month: 'short',
  }).format(date);
};
