import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Portfolio = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="./assets/images/pokemon.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Pokemon</CardTitle>
          <CardSubtitle>Project 1</CardSubtitle>
          <CardText>We made a Pokemon site with the database of
              pokemons and p-cards!</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Lifetrack</CardTitle>
          <CardSubtitle>Project 2</CardSubtitle>
          <CardText>We created a life track application that tracks our to do list, fitness, and diaries.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dungeon Sheets</CardTitle>
          <CardSubtitle>Project 3</CardSubtitle>
          <CardText>We made Dungeon sheets with log in site for users and character genertor, dice roll, and character sheet.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Portfolio;