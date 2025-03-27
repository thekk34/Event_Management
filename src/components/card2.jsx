import React from "react";
import styled from "styled-components";
import Data from "./SessionData";

export default function Card2(prop) {
  return (
    <StyledWrapper>
      <div className="card2" aria-label="Event Card">
        <div className="left">
          <h2>{prop.image.type}</h2>
          <p>On-side</p>
          <h3>{prop.image.date} {prop.image.time}</h3>
          <h2>{prop.image.place}</h2>
          <h3>{prop.image.price}</h3>
        </div>
        <div className="right">
          <img src={prop.image.image} alt={Data.title} />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card2 {
    width: 90%;
    max-width: 800px;
    background: linear-gradient(to left, #2196F3, #333333); 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px;
    text-align: left;
  }

  .right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right img {
    width: 120px;
    height: 120px;
    max-width: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
  }

  @media (max-width: 600px) {
    .card2 {
      flex-direction: column;
      text-align: center;
    }

    .left, .right {
      width: 100%;
      text-align: center;
    }

    .right img {
      margin-top: 10px;
    }
      h2{
      color:red;
      }
  }
`;
