import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import propertiesList from '../../components/dataTemp'
import AreaIcon from '../../components/Icons/Area'
import BathIcon from '../../components/Icons/Bath'
import RoomIcon from '../../components/Icons/Room'
import BuildIcon from '../../components/Icons/Build'
import TypeIcon from '../../components/Icons/Type'
import RenovationIcon from '../../components/Icons/Renovation'
import Nav from '../../components/Nav'
import DivContainer from '../../styledComponents/DivContainer'
import ParkingIcon from '../../components/Icons/Parking'
import NeighborhoodIcon from '../../components/Icons/Neighborhood'
import GalleryDetails from '../../styledComponents/GalleryDetails'
import GalleryDetailsContainer from '../../styledComponents/GalleryDetailsContainer'
import Modal from './Modal'
import StyledTextTwo from '../../styledComponents/StyledTextTwo'
import Map from '../../components/Map'
import Button from '../../styledComponents/Button'
import axios from 'axios'
import styles from './styles.module.css'

const Details = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    geoCodeAddress()
  }, [])

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handelRotationRight = () => {
    const totalLength = propertiesList[0].pictures.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = propertiesList[0].pictures[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = propertiesList[0].pictures.filter((item) => {
      return propertiesList[0].pictures.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = propertiesList[0].pictures.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = propertiesList[0].pictures[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = propertiesList[0].pictures.filter((item) => {
      return propertiesList[0].pictures.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  const geoCodeAddress = () => {
    axios.get('https://maps.googleapis.com/maps/api/geoCodeAddress/json', {
      params: {
        address: propertiesList[0].address,
        key: 'AIzaSyBUD_-d0mWE87B23-tsWzpwz4SJawICzgs'
      }
    })
    .then(response => console.log(response.data.results[0]))
    .catch(err => console.log(err))
  }

  return (
    <>
      <Nav />
      <DivContainer>
        <h1>Imágenes:</h1>
        <GalleryDetailsContainer>
          {
            propertiesList[0].pictures.map((e, index) => (
              <GalleryDetails key={e}>
                <img src={e} onClick={() => handleClick(e, index)} />
              </GalleryDetails>
            ))
          }
        </GalleryDetailsContainer>
        <StyledTextTwo className='available'>{propertiesList[0].status}</StyledTextTwo>
        <div className={styles.container}>
          <div>
            <h1>Dirección:</h1>
            {propertiesList[0].city} <b>{' > '}</b> {propertiesList[0].neighbourhood} <b>{' > '}</b> {propertiesList[0].address}
          </div>
          {/* <div> */}
          {/* </div> */}
        </div>
        <h1>Características:</h1>
        <div className={styles.features}>
          <div>
            <AreaIcon /> <h3>Área:</h3> {propertiesList[0].area}m2
          </div>
          <div>
            <TypeIcon /> <h3>Tipo:</h3>{propertiesList[0].type}
          </div>
          <div>
            <RoomIcon /> <h3>Nro de habitaciones:</h3> {propertiesList[0].rooms}
          </div>
          
          <div>
            <BathIcon /> <h3>Nro de baños:</h3>{propertiesList[0].bathrooms}
          </div>
          <div>
            <NeighborhoodIcon /><h3>Vecindario:</h3>{propertiesList[0].neighbourhood}
          </div>
          <div>
            <BuildIcon /><h3>Fecha de construcción:</h3>{propertiesList[0].constructionDate}
          </div>
          <div>
            <RenovationIcon /><h3>Fecha de renovación:</h3>{propertiesList[0].renovationDate}
          </div>
          <div>
            <ParkingIcon /><h3>Estacionamiento:</h3>{propertiesList[0].parkingSlot ? 'Sí' : 'No'}
          </div>
        </div>
        {/* <script src="script.js"></script> */}
        {/* <div id="map"></div> */}
        <h1>Ubicación:</h1>
        <Map/>
      </DivContainer>
      <div className={styles.btnContainer}>
        <Button className='center'>Volver</Button>
      </div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </>
  )
}

export default Details