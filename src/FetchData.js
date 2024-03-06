const countries = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const repsonse = data.json();
  return repsonse;
};
export default countries;
