import React from "react";
import styled from "@emotion/styled";

function Condition({ temp, condition }) {
  const Temp = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 200;
    position: relative;
    &:hover {
      top: -3px;
    }
  `;
  const Condition = styled.div`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2em;
    position: relative;
    &:hover {
      top: -5px;
    }
  `;
  return (
    <>
      <Temp>{temp}°C</Temp>
      <Condition>{condition}</Condition>
    </>
  );
}

export default Condition;
