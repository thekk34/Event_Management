import 'react';
import styled from 'styled-components';



const Card = ({ event }) => {
  return (
    <StyledWrapper>
      <article className="card">
        <div className="card-int">
          <span className="card__span">{event.type}</span>
          <div className="img"><img src={event.image} alt={event.type} /></div>
          <div className="card-data">
            <p className="title">{event.title}</p>
            <p>{event.summary}</p>
            <button className="button">More info</button>
          </div>
        </div>
      </article>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    padding: 2px;
    background-color:black ;
    background-image: linear-gradient(to right bottom, #8a54bf, #7b05ae, #9b05cb, #bd00e7, #bd00e7);
    background-size: 200% 200%;
    border-radius: 12px;
  }
  img{
  width: 100%;
  height: 100%;
  }
  .card-int {
    position: relative;
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    border-radius: 6px;
    background-color: white;
  }

  .img {
    width: 100%;
    height: 175px;
    background-color: pink;
  }

  .title {
    font-weight: bold;
    font-size: 16px;
   
  }

  .card-data {
    padding: 20px;
    font-size: 14px;
  }

  .card__span {
    font-family: 'Lucida Sans' sans-serif;
    font-size: 11px;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: white;
    padding: 5px 10px;
    border-radius: 15px;
  }

  button {
    width: 100%;
    margin-top: 15px;
background-image: linear-gradient(to right bottom,#9b50e4,#f62af4, #f2a6ff, #bc4dbb, #ff9aff);
    background-size: 200% 200%;
    border: none;
    padding: 8px 10px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    transition: transform 0.1s ease-in;
  }

  button:active {
    transform: translateY(3px);
  }

  .card:hover, button:hover {
    animation: gradient 0.8s ease-in 1;
  }

  @keyframes gradient {
    0% {
      background-position: 200% 200%;
    }

    100% {
      background-position: 400% 400%;
    }
  }`;

export default Card;
