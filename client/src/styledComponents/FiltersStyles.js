import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  position: fixed;
  top: 125px;
  width: 240px;
  background-color: rgb(243, 247, 248);
  height: 832px;
`;

export const Title = styled.h1`
  /* padding-top: 1em; */
  font-size: ${props => props.fSize || '1.5em'};
  color: ${props => props.color || '#333'};
  margin: ${props => props.margin || '4px'};
  padding: ${props => props.padding || '4px'};
  font-weight: bold;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  margin-top: 1.5em;
  margin-left: 45px;
  width: 155px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 1.5em;
  margin-left: 45px;
`;

export const FilterType = styled.h1`
  font-size: 1em;
`;

export const Select = styled.select`
  width: 155px;
`;

// export const Input = styled.input`
//   margin-right: 10px;
// `;

export const StyledButton = styled.div`
  text-align: center;
  margin-top: 2em;
`;
