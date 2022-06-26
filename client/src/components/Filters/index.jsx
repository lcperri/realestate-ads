import React, { useEffect, useState } from "react";
import Button from "../../styledComponents/Button";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";

import {
  Container,
  Title,
  Input,
  Label,
  FilterType,
  Select,
  StyledButton,
} from "../../styledComponents/FiltersStyles";

export default function Filter() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [max, setMax] = useState("");
  const [filters, setFilters] = useState({});
  const [freeze, setFreeze] = useState(false);

  function handleType(e) {
    setFreeze(false);
    setLocation(e.target.value);
  }

  function handleMax(e) {
    setFreeze(false);
    setMax(e.target.value);
  }

  function handleChange(e) {
    setFreeze(false);
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
    if (!freeze) {
      dispatch(filter(filters, location, max));
    }
  }, [location, filters, max]);

  function handleSubmit(e) {
    e.preventDefault();
    setFreeze(true);
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
          onChange={(e) => handleType(e)}
        />
        <Label>
          <FilterType>Tipo de Propiedad</FilterType>
          <Select name="type" value={filters.type} onChange={(e) => handleChange(e)}>
            <option value="">Sin Preferencias</option>
            <option value="Departamento">Departamento</option>
            <option value="Casa">Casa</option>
            <option value="Casa de Campo">Casa de Campo</option>
            <option value="Casa de Playa">Casa de Playa</option>
            <option value="Garage">Grarage</option>
            <option value="Habitacion">Habitacion</option>
            <option value="Hotel">Hotel</option>
            <option value="Local Comercial">Local Comercial</option>
            <option value="Local Industrial">Local Industrial</option>
            <option value="Oficina">Oficina</option>
            <option value="Otros">Otros</option>
            <option value="Terreno/Lote">Terreno/Lote</option>
            <option value="Terreno agricola">Terreno agricola</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Habitaciones</FilterType>
          <Select name="rooms" value={filters.rooms} onChange={(e) => handleChange(e)}>
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
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </Select>
        </Label>
        <StyledButton>
          <Button style={{ color: "black" }} color="yellow" type="submit">
            Aplicar Filtro
          </Button>
        </StyledButton>
      </form>
    </Container>
  );
}
