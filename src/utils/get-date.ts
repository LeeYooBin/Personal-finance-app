export const getDate = (date: Date = new Date()): string => {
  const editDate = new Date(date);
  const day: string = String(editDate.getDate()).padStart(2, "0");
  const month: string = getMonthName(editDate.getMonth());
  const year: number = editDate.getFullYear();

  const formattedDate: string = `${day} ${month} ${year}`;

  return formattedDate;
};

const getMonthName = (month: number): string => {
  const monthNames: string[] = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Maio",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ];

  return monthNames[month];
};
