import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { useNavigate, useParams } from 'react-router-dom'
import StyledTextTwo from '../../styledComponents/StyledTextTwo'
import Map from '../../components/Map'
import Button from '../../styledComponents/Button'
import styles from './styles.module.css'
import { getPropertyById } from '../../redux/actions'

const Details = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const { id } = useParams()
  const property = useSelector(state => state.property)

  useEffect(() => {
    geoCodeAddress()
    dispatch(getPropertyById(id))
  }, [])
  
  // useEffect(() => {
    
  // }, [property])

  
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handelRotationRight = () => {
    const totalLength = property.pictures.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = property.pictures[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = property.pictures.filter((item) => {
      return property.pictures.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = property.pictures.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = property.pictures[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = property.pictures.filter((item) => {
      return property.pictures.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  const geoCodeAddress = () => {
  }

  return (
    <>
      <Nav />
      <DivContainer>
        <h1>Imágenes:</h1>
        <GalleryDetailsContainer>
          {
            property.pictures?.map((e, index) => (
              <GalleryDetails key={e}>
                <img src={e} onClick={() => handleClick(e, index)} />
              </GalleryDetails>
            ))
          }
        </GalleryDetailsContainer>
        <StyledTextTwo className='available'>{property.status}</StyledTextTwo>
        <div className={styles.container}>
          <div>
            <h1>Dirección:</h1>
            {property.city} <b>{' > '}</b> {property.neighbourhood} <b>{' > '}</b> {property.address}
          </div>
        </div>
        <h1>Características:</h1>
        <div className={styles.features}>
          <div>
            <AreaIcon /> <h3>Área:</h3> {property.area}m2
          </div>
          <div>
            <TypeIcon /> <h3>Tipo:</h3>{property.type}
          </div>
          <div>
            <RoomIcon /> <h3>Nro de habitaciones:</h3> {property.rooms}
          </div>
          
          <div>
            <BathIcon /> <h3>Nro de baños:</h3>{property.bathrooms}
          </div>
          <div>
            <NeighborhoodIcon /><h3>Vecindario:</h3>{property.neighbourhood}
          </div>
          <div>
            <BuildIcon /><h3>Fecha de construcción:</h3>{property.constructionDate}
          </div>
          <div>
            <RenovationIcon /><h3>Fecha de renovación:</h3>{property.renovationDate}
          </div>
          <div>
            <ParkingIcon /><h3>Estacionamiento:</h3>{property.parkingSlot ? 'Sí' : 'No'}
          </div>
        </div>
        {/* <script src="script.js"></script> */}
        {/* <div id="map"></div> */}
        <h1>Ubicación:</h1>
        { property  && <Map address={property.address + ' ' + property.city} /> }
      </DivContainer>
      <div className={styles.btnContainer}>
        <Button className='center' onClick={() => navigate("/home", { replace: true })}>Volver</Button>
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