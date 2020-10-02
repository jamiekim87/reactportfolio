import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import image from '../../assets/images/portfolio.png'
 
const Home = (props) => {
  return (
    <div>
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody class="center">
        <CardTitle>Jamie's React Portfolio</CardTitle>
        <CardText>Welcome to my portfolio page. I am a Full Stack Web Developer graduating from UCI Coding Bootcamp of 2020.</CardText>
        <Button>Learn more</Button>
      </CardBody>
    </Card>
  </div>
  );
};

export default Home;
