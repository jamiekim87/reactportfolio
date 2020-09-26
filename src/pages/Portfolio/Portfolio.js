import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Pokemon from '../../assets/images/pokemon.png'
import lifetrack from '../../assets/images/lifetrack.jpg'
import image3 from '../../assets/images/image.png'




const Portfolio = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={Pokemon} alt="pokemon pic" />
        <CardBody>
          <CardTitle>Pokemon</CardTitle>
          <CardSubtitle>Project 1</CardSubtitle>
          <CardText>We made a Pokemon site with the database of
              pokemons and p-cards!</CardText>
            <a href="https://kalynbsimms.github.io/pokeProject/" class="btn btn-primary">Go somewhere</a>
            <a href=" https://github.com/Kalynbsimms/pokeProject.git" class="btn btn-primary">GitHub Repo</a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={lifetrack} alt="lifetrack" />
        <CardBody>
          <CardTitle>Lifetrack</CardTitle>
          <CardSubtitle>Project 2</CardSubtitle>
          <CardText>We created a life track application that tracks our to do list, fitness, and diaries.</CardText>
          <a href="https://afternoon-stream-93666.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
          <a href="https://github.com/jamiekim87/lifetrack.git" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={image3} alt="dungeon" />
        <CardBody>
          <CardTitle>Dungeon Sheets</CardTitle>
          <CardSubtitle>Project 3</CardSubtitle>
          <CardText>We made Dungeon sheets with log in site for users and character genertor, dice roll, and character sheet.</CardText>
          <a href="" class="btn btn-primary">Go somewhere</a>
          <a href="" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
      
    </div>
  
 
  );
};

export default Portfolio;


