import React from "react";
import Button from "../../styledComponents/Button";
import {
  Container,
  Title,
  Input,
  Label,
  FilterType,
  Select,
  StyledButton,
} from "../../styledComponents/FiltersStyles";

const Filter = () => {
  return (
    <Container>
      <form>
        <Title>Filtrar Por</Title>

        <Input
          // action={{ icon: "search" }}
          name="search"
          placeholder="Zona/Barrio"
        />

        <Label>
          <FilterType>Tipo de Propiedad</FilterType>
          <Select name="type">
            <option value="">Cualquier</option>
            <option value="apartment">Departamento</option>
            <option value="house">Casa</option>
            <option value="condo">Condo</option>
            <option value="townhome">Casa de Campo</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Habitaciones</FilterType>
          <Select name="beds">
            <option value="">Sin Preferencias</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Baños</FilterType>
          <Select name="baths">
            <option value="">Sin Preferencias</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </Select>
        </Label>
        <Label>
          <FilterType>Precio</FilterType>
          <Select name="priceMax">
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
          <FilterType>Otro Filtro</FilterType>
          <Select name="distanceMax">
            <option value="">Sin Limite</option>
            <option value="1">1 mile</option>
            <option value="2">2 miles</option>
            <option value="3">3 miles</option>
            <option value="4">4 miles</option>
            <option value="5">5 miles</option>
            <option value="6">6 miles</option>
            <option value="7">7 miles</option>
            <option value="8">8 miles</option>
            <option value="9">9 miles</option>
            <option value="10">10 miles</option>
            <option value="15">15 miles</option>
            <option value="20">20 miles</option>
            <option value="25">25 miles</option>
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
};

export default Filter;
