import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import Pokemon from '../../assets/images/pokemon3.jpg'
import lifetrack from '../../assets/images/lifetrack.jpg'
import image1 from '../../assets/images/image1.jpg'
import fitnesstracker from '../../assets/images/fitnesstracker.png'
import budget_tracker from '../../assets/images/budget_tracker.png'
import employee from '../../assets/images/employee.png'
import './Portfolio.css'

const Portfolio = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src={Pokemon} alt="pokemon pic" />
        <CardBody>
          <CardTitle>Pokemon</CardTitle>
          <CardSubtitle>Project 1</CardSubtitle>
          <CardText>We made a Pokemon site with the database of pokemons and p-cards!</CardText>
          <a href="https://kalynbsimms.github.io/pokeProject/" class="btn btn-primary">Go somewhere</a>
          <a href=" https://github.com/Kalynbsimms/pokeProject.git" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={lifetrack} alt="lifetrack" />
        <CardBody>
          <CardTitle>Lifetrack</CardTitle>
          <CardSubtitle>Project 2</CardSubtitle>
          <CardText>We created a life track application that tracks our to do list, fitness, and diaries.</CardText>
          <a href="https://afternoon-stream-93666.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
          <a href="https://github.com/DaniBoie/sequelizeActivity" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={image1} alt="dungeon" />
        <CardBody>
          <CardTitle>Dungeon Sheets</CardTitle>
          <CardSubtitle>Project 3</CardSubtitle>
          <CardText>We made Dungeon sheets with log in site for users and character genertor, dice roll, and character sheet.</CardText>
          <a href="" class="btn btn-primary">Go somewhere</a>
          <a href="" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={fitnesstracker} alt="fitness tracker" />
        <CardBody>
          <CardTitle>Fitness Tracker</CardTitle>
          <CardSubtitle>Coursework-1</CardSubtitle>
          <CardText>This is a workout tracker application that is able to view create and track daily workouts.</CardText>
          <a href="https://damp-shore-84611.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
          <a href="https://github.com/jamiekim87/workoutTracker.git" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={budget_tracker} alt="budget-tracker" />
        <CardBody>
          <CardTitle>Progressive Budget</CardTitle>
          <CardSubtitle>Coursework-2</CardSubtitle>
          <CardText>This is Budget Tracker applicaiton that add expenses and depostis to their budget with or without a connection.</CardText>
          <a href="https://ancient-ocean-50533.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
          <a href="https://github.com/jamiekim87/budget_tracker.git" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={employee} alt="employee" />
        <CardBody>
          <CardTitle>User Directory</CardTitle>
          <CardSubtitle>Coursework-3</CardSubtitle>
          <CardText>This is employee directory application with React that able to view my entire directory at once so that I have quck access to their information.</CardText>
          <a href="https://jamiekim87.github.io/employee/" class="btn btn-primary">Go somewhere</a>
          <a href="https://github.com/jamiekim87/employee_directory.git" class="btn btn-primary">GitHub</a>
        </CardBody>
      </Card>
    </CardGroup>
  );
};
    // <div>
    //   <Container>
    //     <br></br>
    //    <h1>Portfolio</h1>
    //    <hr></hr>
    //   <Card>
    //     <CardImg top width="100%" src={Pokemon} alt="pokemon pic" width="300" heignt="345"/>
    //     <CardBody>
    //       <CardTitle>Pokemon</CardTitle>
    //       <CardSubtitle>Project 1</CardSubtitle>
    //       <CardText>We made a Pokemon site with the database of
    //           pokemons and p-cards!</CardText>
    //         <a href="https://kalynbsimms.github.io/pokeProject/" class="btn btn-primary">Go somewhere</a>
    //         <a href=" https://github.com/Kalynbsimms/pokeProject.git" class="btn btn-primary">GitHub Repo</a>
    //     </CardBody>
    //   </Card>
    //   <Card>
    //     <CardImg top width="100%" src={lifetrack} alt="lifetrack" />
    //     <CardBody>
    //       <CardTitle>Lifetrack</CardTitle>
    //       <CardSubtitle>Project 2</CardSubtitle>
    //       <CardText>We created a life track application that tracks our to do list, fitness, and diaries.</CardText>
    //       <a href="https://afternoon-stream-93666.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
    //       <a href="https://github.com/DaniBoie/sequelizeActivity" class="btn btn-primary">GitHub Repo</a>
    //     </CardBody>
    //   </Card>
    //   <Card>
    //     <CardImg top width="100%" src={image1} alt="dungeon" />
    //     <CardBody>
    //       <CardTitle>Dungeon Sheets</CardTitle>
    //       <CardSubtitle>Project 3</CardSubtitle>
    //       <CardText>We made Dungeon sheets with log in site for users and character genertor, dice roll, and character sheet.</CardText>
    //       <a href="" class="btn btn-primary">Go somewhere</a>
    //       <a href="" class="btn btn-primary">GitHub</a>
    //     </CardBody>
    //   </Card>
    //   <Card>
    //     <CardImg top width="100%" src={fitnesstracker} alt="fitness tracker" />
    //     <CardBody>
    //       <CardTitle>Fitness Tracker</CardTitle>
    //       <CardSubtitle>Coursework-1</CardSubtitle>
    //       <CardText>This is a workout tracker application that is able to view create and track daily workouts. </CardText>
    //       <a href="https://damp-shore-84611.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
    //       <a href="https://github.com/jamiekim87/workoutTracker.git" class="btn btn-primary">GitHub</a>
    //     </CardBody>
    //   </Card>
    //   <Card>
    //     <CardImg top width="100%" src={budget_tracker} alt="budget-tracker" />
    //     <CardBody>
    //       <CardTitle>Progressive Budget</CardTitle>
    //       <CardSubtitle>Coursework-2</CardSubtitle>
    //       <CardText>This is Budget Tracker applicaiton that add expenses and depostis to their budget with or without a connection. </CardText>
    //       <a href="https://ancient-ocean-50533.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
    //       <a href="https://github.com/jamiekim87/budget_tracker.git" class="btn btn-primary">GitHub</a>
    //     </CardBody>
    //   </Card>
    //   <Card>
    //     <CardImg top width="100%" src={employee} alt="lifetrack" />
    //     <CardBody>
    //       <CardTitle>User Directory</CardTitle>
    //       <CardSubtitle>Coursework-3</CardSubtitle>
    //       <CardText>This is employee directory application with React that able to view my entire directory at once so that I have quck access to their information.   </CardText>
    //       <a href="https://jamiekim87.github.io/employee/" class="btn btn-primary">Go somewhere</a>
    //       <a href="https://github.com/jamiekim87/employee_directory.git" class="btn btn-primary">GitHub</a>
    //     </CardBody>
    //   </Card>
    //   </Container>
    // </div>
  
 
export default Portfolio;


