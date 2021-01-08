const url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=da19adb11632b42d0ba060354e5c4ca1&format=json'


function getMusicData(){
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist=>{
      return{
        id: artist.mbid,
        name: artist.name,
        image: artist.image[3]['#text']
      }
    }))
}

export {getMusicData}
