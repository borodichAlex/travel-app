export const getDataCountries = () => {
  return fetch('dataCountries.json')
    .then((data) => data.json())
}