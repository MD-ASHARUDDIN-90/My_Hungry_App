async function cityHotelListFetch(value) {
  //after clicking on predicted place fetch data after place fetch
  console.log(value, "i m selectd place");

 const res = await fetch(
    `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${value.place_id}`
  );
  const data = await res.json(); //{}

  const latitude = data.data[0].geometry.location.lat;
  const longitude = data.data[0].geometry.location.lng;
  localStorage.setItem("longitude",JSON.stringify(longitude))
  localStorage.setItem("latitude",JSON.stringify(latitude))
  console.log(latitude, "geo");
  const response = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
  );
  console.log(response,"responce from cityHotelFetch")
  const fetchData = await response.json();
  console.log(
    fetchData.data?.cards[2].data?.data?.cards,
    "restaurant data allHotelData"
  );
  return fetchData.data?.cards[2].data?.data?.cards;
  
  //   localStorage.setItem("allRestroDetail" ,JSON.stringify(fetchData.data?.cards[2].data?.data?.cards))
}
export default cityHotelListFetch;
