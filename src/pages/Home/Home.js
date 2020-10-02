import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';
import image from '../../assets/images/portfolio.png'
 
const Home = (props) => {
  return (
    <div>
    <Container>
      <br></br>
    <Card>
      <CardImg top width="70%" src={image} alt="Card image cap" />
      <CardBody class="center">
        <CardTitle>Jamie's React Portfolio</CardTitle>
        <CardText>Welcome to my portfolio page. I am a Full Stack Web Developer graduating from UCI Coding Bootcamp of 2020.</CardText>
        <form method="get" action="/about">
        <Button >Learn more</Button>
        </form>
      </CardBody>
    </Card>
    </Container>
  </div>
  );
};

export default Home;
