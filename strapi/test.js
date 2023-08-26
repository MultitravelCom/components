async function getFlightCards() {
    const res = await fetch('https://strapicontent.apimultitravel.com/api/flight-cards?populate=*')
    if (!res.ok) {
      throw new Error('Error!')
    }
    console.log("res------------>>>: ", res)
    const  {data}  = await res.json();
    console.log("data------------>>>: ", data)
    const  url  = data[0].attributes.img.data[0].attributes.url;
    console.log("URL------------>>>: ", url)
  }

  getFlightCards();