const  subtractMonths = (date: Date, months: number) =>  {
    date.setMonth(date.getMonth() - months);
  
    return date;
  }
  
  // November 14, 2022
  const date = new Date();
  
  export const prevDate = subtractMonths(date, 3).toISOString().slice(0, 10);
  export const currentDate = new Date().toISOString().slice(0,10)