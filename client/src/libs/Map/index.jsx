import React, { useState } from 'react'
import { GoogleMap, LoadScript, MarkerF,useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  margin: '0 auto',
  height: '600px',
  borderRadius: '10px'
};

const Map = (props)=> {
  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey: 'AIzaSyBUD_-d0mWE87B23-tsWzpwz4SJawICzgs'
  })

  const [map, setMap] = useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //       const bounds = new window.google.maps.LatLngBounds(props.address);
  //       map.fitBounds(bounds);
  //       setMap(map)
  // }, []);
  
  const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
  }, []);

  return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={props.address}
            zoom={15}
            options={{
              gestureHandling: "cooperative"
            }}
            // onLoad={onLoad}
            onUnmount={onUnmount}
        >
          <MarkerF
            position={props.address}
            visible={true}
            clickable={true}
          />
      </GoogleMap>
  ): <></>
}
export default Map;