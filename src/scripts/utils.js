export function formatDate(publishDate) {
  const inputDate = new Date(publishDate);
  const day = inputDate.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[inputDate.getMonth()];
  const year = inputDate.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

export function formatDate2(date) {
  return new Date(date).toLocaleDateString("en-UK", {
    timeZone: "BTS",
  });
}
