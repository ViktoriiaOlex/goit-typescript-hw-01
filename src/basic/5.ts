enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

//Приклад для перевіки
console.log(isWeekend(DayOfWeek.Saturday));
console.log(isWeekend(DayOfWeek.Monday));


