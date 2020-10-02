import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Background from '../../assets/images/bg.png';
import image from '../../assets/images/img1.png';
import { Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';

const About = (props) => {
  return (
    <>
      <div>
      <div className="p-3 bg-info my-2 rounded">
      </div>
      {/* <br></br>
      <h1>About</h1>
      <hr></hr> */}

      <Media>
      <Media left href="#">
      <img src={image} width="50%" width="265" height="265" />

      </Media>
      <Media body>
        <Media heading>
          About Me
        </Media>
        Entering college about eight years ago, my parents told me that this is the time of your life where you decide
            who you will become. Quite a scary thought for someone that liked little bits and pieces of each subject I
            learned in school. I decided to major in Chemistry, something I did moderately well in high school and could
            lead to the path of becoming a pharmacist, the phrase a lot of my peers around me mentioned more so because of
            their parents then because of themselves. Nevertheless, my experience in college life led me to find genuine
            interest in Computer as well as Web Development. I have posted my projects and several courseworks on my portfolio
            page. Please contact me for further questions. Thank you!      </Media>
    </Media>
      
          {/* <img src={Background} />
          <img src={image} width="50%" width="260" height="265" />
          <p className="lead">Entering college about eight years ago, my parents told me that this is the time of your life where you decide
            who you will become. Quite a scary thought for someone that liked little bits and pieces of each subject I
            learned in school. I decided to major in Chemistry, something I did moderately well in high school and could
            lead to the path of becoming a pharmacist, the phrase a lot of my peers around me mentioned more so because of
            their parents then because of themselves. Nevertheless, my experience in college life led me to find genuine
            interest in Computer as well as Web Development. I have posted my projects and several courseworks on my portfolio
            page. Please contact me for further questions. Thank you!</p> */}
          <hr className="my-2" />
          <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
          </svg>  Jamiejiyoungkim1004@gmail.com</p>
          <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
          </svg>  (949) 899-4748</p>
          <p className="lead">
          <Button className="buttoncolor bottom" type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://github.com/jamiekim87';
          }}
        > Github</Button>
        <Button className="buttoncolor bottom" type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '';
          }}
        >Resume</Button>
        <Button className="buttoncolor bottom" type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.linkedin.com/in/jamie-kim-0748411a6/';
          }}
        >LinkedIn</Button>
          </p>
      </div>
    </>

  );
}

export default About