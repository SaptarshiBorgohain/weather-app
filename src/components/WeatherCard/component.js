import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";
import { motion } from "framer-motion";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    //High temp
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 300;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${Math.abs(lowColor)}, 0)
    )`;
  } else if (temp <= 12) {
    //Low temp
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 300;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${Math.abs(lowColor)}, 255)
    )`;
    console.log(lowColor);
    console.log(bg);
  }
  const Card = styled.div`
    margin-left: 10vw;
    margin-top: 30vh;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 15px;
    align-items: center;
    position: relative;
    padding-left: 50px;
    padding-right: 50px;
    &:hover {
      top: -3px;
    }
  `;
  return (
    <motion.div initial={{ scale: 0, y: 300 }} animate={{ scale: 1, y: 0 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};
export default WeatherCard;
