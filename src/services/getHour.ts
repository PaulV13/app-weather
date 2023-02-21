import format from "date-fns/format";

const getHour = (dt:number, timezone:string) => {
  const date = new Date(dt * 1000);
  const datecustom = date.toLocaleString("us-US", {
    timeZone: `${timezone}`,
  });
  const hour = format(new Date(datecustom), "HH:mm");
  return hour;
};

export default getHour;
