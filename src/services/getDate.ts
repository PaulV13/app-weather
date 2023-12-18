import format from "date-fns/format";

function getDate(dt: number) {
  const date = new Date(dt * 1000);
  const dateTime = format(new Date(date), "eee, d MMMM HH:mm");
  return dateTime;
}

export default getDate;
