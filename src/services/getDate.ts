import format from "date-fns/format";

function getDate(dt: number, timezone: string) {
  const date = new Date(dt * 1000);
  const datecustom = date.toLocaleString("us-US", {
    timeZone: `${timezone}`,
  });
  const dateTime = format(new Date(datecustom), "eee, d MMMM HH:mm");
  return dateTime;
}

export default getDate;
