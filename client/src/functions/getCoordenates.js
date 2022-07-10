import axios from 'axios'
//La api de goole recibe una dirección y devuelve su coordenada:
export default async function getCoordenates(address) {
  if (!address) return
  const coordenates = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: address,
      key: 'AIzaSyBUD_-d0mWE87B23-tsWzpwz4SJawICzgs',
      dataType: 'json'
    }
  })
  return coordenates.data.results[0]?.geometry.location
}