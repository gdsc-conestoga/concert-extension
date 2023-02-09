async function fetchData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR API KEY HERE',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2023-02-08&maxDate=2023-02-15&page=1', options)
    const record = await res.json()
    //console.log('record', record)
    //document.getElementById("concerts").innerHTML = record.data.map(artists => artists.name)
    document.getElementById("concerts").innerHTML = record.data.map(artists => `<li>${artists.name}</li>`).join(''); 
}
fetchData();
