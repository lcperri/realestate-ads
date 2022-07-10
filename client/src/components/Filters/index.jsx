import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";

import { useSelector } from 'react-redux/es/exports';
import {
  Container,
  Title,
  Input,
  Label,
  FilterType,
  Select
} from "../../styledComponents/FiltersStyles";

export default function Filter() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.filter.location);
  const [location, setLocation] = useState(search);
  const [max, setMax] = useState("");
  const [filters, setFilters] = useState({});

  function handleType(e) {
    setLocation(e.target.value);
  }

  function handleMax(e) {
    setMax(e.target.value);
  }

  function handleChange(e) {
    if (e.target.value) {
      switch (e.target.name) {
        case "operation":
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          });
          break;
        case "rooms":
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          });
          break;
        case "bathrooms":
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          });
          break;
        case "parkingSlot":
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          });
          break;
        default:
          setFilters({
            ...filters,
            [e.target.name]: e.target.value,
          });
          break;
      }
    } else {
      setFilters(delete [e.target.name]);
    }
  }

  useEffect(() => {
    dispatch(filter(filters, location, max));
  }, [location, filters, max]);

  function handleSubmit(e) {
    e.preventDefault();
    setFilters({});
    setLocation("");
    dispatch(filter(filters, location));
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
        <Title>Filtrar Por</Title>
        <Label>
          <FilterType>Tipo de Operacion</FilterType>
          <Select
            name="operation"
            value={filters.operation}
            onChange={handleChange}
          >
            <option value="">Sin Preferencias</option>
            <option value="rent">Alquilar</option>
            <option value="sell">Comprar</option>
          </Select>
        </Label>
        <Input
          type="text"
          name="neighbourhood"
          placeholder="Zona/Barrio"
          value={location}
          onChange={(e) => handleType(e)}
        />
        <Label>
          <FilterType>Tipo de Propiedad</FilterType>
          <Select
            name="type"
            value={filters.type}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Sin Preferencias</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="local comercial">Local Comercial</option>
            <option value="oficina">Oficina</option>
            <option value="casa de campo">Casa de Campo</option>
            <option value="casa de playa">Casa de Playa</option>
            <option value="garage">Grarage</option>
            <option value="habitación">Habitacion</option>
            <option value="hotel">Hotel</option>
            <option value="local industrial">Local Industrial</option>
            <option value="terreno/lote">Terreno/Lote</option>
            <option value="terreno agricola">Terreno agricola</option>
            <option value="otros">Otros</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Habitaciones</FilterType>
          <Select
            name="rooms"
            value={filters.rooms}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Sin Preferencias</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Baños</FilterType>
          <Select
            name="bathrooms"
            value={filters.bathrooms}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Sin Preferencias</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Precio</FilterType>
          <Select
            name="max"
            value={filters.priceMax}
            onChange={(e) => handleMax(e)}
          >
            <option value="">Sin Limite</option>
            <option value="400">$400</option>
            <option value="600">$600</option>
            <option value="800">$800</option>
            <option value="1000">$1,000</option>
            <option value="1500">$1,500</option>
            <option value="2000">$2,000</option>
            <option value="2500">$2,500</option>
            <option value="3000">$3,000</option>
            <option value="3500">$3,500</option>
            <option value="4000">$4,000</option>
            <option value="5000">$5,000</option>
            <option value="7000">$7,000</option>
            <option value="10000">$10,000</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Garage</FilterType>
          <Select
            name="parkingSlot"
            value={filters.parkingSlot}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Sin Preferencias</option>
            <option value="true">Con garage</option>
            <option value="false">Sin garage</option>
          </Select>
        </Label>
        {/* <StyledButton>
          <Button style={{ color: "black" }} color="yellow" type="submit">
            Aplicar Filtro
          </Button>
        </StyledButton> */}
      </form>
    </Container>
  );
}
