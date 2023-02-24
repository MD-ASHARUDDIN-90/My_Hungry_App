async function placeFetch(value){
 
    console.log(value,"coming from search bar")
 
    const res = await fetch( `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}&types=`);
    console.log(res,"responce from placeFetch")
    const data = await res.json() 
 
    console.log(data,"prdicted places data from placeFetch")
    return data
}

export default placeFetch