const getData = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=53795c15e653dce29e9352f6e92119f1`
  );
  const data = await res.json();
  const { cod, message } = data;

  if (cod === 200) {
    const { lat, lon } = data.coord;
    const { name } = data;
    const { country } = data.sys;

    return { lat, lon, name, country };
  }

  return { cod, message };
};

export default getData;
