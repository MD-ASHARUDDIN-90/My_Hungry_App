export default async function foodDataFetch(value) {
  const res = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=17.385044&lng=78.486671&str=${value}&trackingId=undefined`
  );
  const data = await res.json();
  return data;
}
