import React, { useMemo } from 'react'
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
  height: '600px',
  borderRadius: '10px'
};

function Map({ address }) {
  // let center = {}
  //Le damos una dirección a la api de goole y devuelve una coordenada:
  const getCoordenate = address => {
    // const center = {}
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: 'AIzaSyBUD_-d0mWE87B23-tsWzpwz4SJawICzgs'
        }
      })
      .then(result => result.data.results[0].geometry.location)
      // return result.data.results[0].geometry.location
  }

  const center = useMemo(() => ( 
    // {
    //   lat: -34.6036844,
    //   lng: -58.3815591
    // }
    console.log(address)
    // console.log(getCoordenate(address)) 
  ), [])
  // .then(response => console.log(response.data.results[0].geometry.location))
  // .catch(err => console.log(err))
  //Usememo para que realice el cálculo de posición solo la primera vez y quede guardado en memoria.
  
  return (
    <LoadScript
    googleMapsApiKey="AIzaSyBUD_-d0mWE87B23-tsWzpwz4SJawICzgs"
    >

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11.6}
        >
        <MarkerF
          position={center}
          visible={true}
          clickable={true}
          />
          {console.log(center)}
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)