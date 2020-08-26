import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

function Location({ city, counrty, getWeather }) {
  const [query, setQuery] = useState("");

  const [inputMode, setInputMode] = useState(false);

  return (
    <Container>
      {!inputMode && <City onClick={() => setInputMode(true)}>{city}</City>}

      {inputMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getWeather(query);
          }}
        >
          <input
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
          <button onClick={() => setInputMode(false)}>Cancel</button>
        </form>
      )}
      <Counrty>{counrty}</Counrty>
    </Container>
  );
}

export default Location;

const Container = styled.div`
  text-align: center;
`;
const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6em;
  cursor: pointer;
  position: relative;
  &:hover {
    top: -5px;
  }
`;
const Counrty = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
`;
