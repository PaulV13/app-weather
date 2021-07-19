const getSevenDailys = async (latitude, longitude) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=53795c15e653dce29e9352f6e92119f1`
  );

  const dataDaily = await res.json();
  return dataDaily;
};

export default getSevenDailys;
