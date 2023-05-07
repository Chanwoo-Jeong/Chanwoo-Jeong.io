import React from "react";
import { styled } from "styled-components";
import { WEATER_TYPE } from "../assets/weatherImg";
import { useParams } from "react-router-dom";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 25rem;
  height: fit-content;

  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    background-color: #1a73e8;

    color: #fff;
    font-size: 1.8rem;
  }
  p {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1.6rem;

    font-size: 1.6rem;

    span {
      margin-right: 8px;
    }
  }
`;

const WeatherInfoDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  img {
    padding: 0rem 6rem 3rem 6rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1.5rem;
    }
  }
`;

const WeatherCard = (props) => {
  const { period } = useParams();
  const { feelsLike, temp, maxTemp, minTemp, weatherImg, castDate, clouds } =
    props;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const dateOnly = String(castDate).substring(0, 10);
  const weatherImgSrc = WEATER_TYPE.find(
    (item) => item.description === weatherImg
  );

  return (
    <Wrapper>
      <header>
        {period === "day" ? `${year} - ${month} - ${date}` : dateOnly}
      </header>

      <WeatherInfoDetailBox>
        <img src={weatherImgSrc.imgURL}></img>
        <div>
          <span>온도</span>
          <span>{temp}</span>
        </div>
        <div>
          <span>체감 온도</span>
          <span>{feelsLike}</span>
        </div>
        <div>
          <span>최저 / 최고</span>
          <span>
            {minTemp} / {maxTemp}
          </span>
        </div>
        <div>
          <span>구름</span>
          <span>{clouds}%</span>
        </div>
      </WeatherInfoDetailBox>
    </Wrapper>
  );
};

export default WeatherCard;
