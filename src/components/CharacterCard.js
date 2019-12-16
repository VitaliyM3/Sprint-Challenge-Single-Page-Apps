import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
width: 300px;
height: 400px;
flex-wrap: wrap;
border: 2px solid blue;
justify-content: space-between;
margin: 10px auto;
padding: 10px;

`


export default function CharacterCard(props) {
  return (
    <Card>
      <h2> {props.name} </h2>
      <img src={props.image} />
      <p> {props.species} </p>
    </Card>
  );
}
