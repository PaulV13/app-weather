import format from "date-fns/format";

const getHour = (dt: number) => {
  const date = new Date(dt * 1000);
  const hour = format(new Date(date), "HH:mm");
  return hour;
};

export default getHour;
