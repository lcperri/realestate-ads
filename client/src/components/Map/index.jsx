import React, { useMemo } from 'react'
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
  height: '600px',
  borderRadius: '10px'
};

function Map() {
  //Usememo para que realice el cálculo de posición solo la primera vez y quede guardado en memoria.
  const center = useMemo(() => (
    {
      lat: -34.6036844,
      lng: -58.3815591
    }
  ), [])

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
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)