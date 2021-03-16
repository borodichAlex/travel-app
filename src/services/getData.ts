export const getData = (lang:string, endpoint: 'countries' | 'places') => {
  return fetch(`https://rs-travel-app1.herokuapp.com/${endpoint}?lang=${lang}`)
    .then((data) => data.json())
}