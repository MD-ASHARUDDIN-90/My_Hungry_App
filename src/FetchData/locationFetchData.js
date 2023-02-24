async function locateFetchData(value) {
  //location on landing page
  console.log(value, "location fetch data");
  const latitude = value[0];
  const longitude = value[1];
  const response = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
  );
  console.log(response,"response")
  const fetchData = await response.json();
  console.log(
    fetchData.data?.cards[2].data?.data?.cards,
    "restaurant data allHotelData"
  );
  return fetchData.data?.cards[2].data?.data?.cards;
}

export default locateFetchData;
