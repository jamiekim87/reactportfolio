import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const About = (props) => {
  return (
    <>
    <div> 
    <Jumbotron>
        <h1 className="display-3">This is  Jamie's page</h1>
        <p className="lead">Entering college about eight years ago, my parents told me that this is the time of your life where you decide
          who you will become. Quite a scary thought for someone that liked little bits and pieces of each subject I
          learned in school. I decided to major in Chemistry, something I did moderately well in high school and could
          lead to the path of becoming a pharmacist, the phrase a lot of my peers around me mentioned more so because of
          their parents then because of themselves. Nevertheless, my experience in college life led me to find genuine
          interest in Computer as well as Web Development. I have posted my projects and several coursework on portfolio
          page. Please contact me for further questions. Thank you!</p>
        <hr className="my-2" />
        <p>Email: Jamiejiyoungkim1004@gmail.com</p>
        <p>Phone: (949) 899-4748</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    
          

          <button class="btn btn-primary" onclick="document.location='https://github.com/jamiekim87'">Github</button>
          <button class="btn btn-primary"
            onclick="document.location='https://www.linkedin.com/in/jamie-kim-0748411a6/'">LinkedIn</button>
          <button class="btn btn-primary"
            onclick="document.location=' https://drive.google.com/file/d/1DuFK2Jyl6LpJWapa9mohwoPTBOvS8eaO/view?ths=true'">Resume</button>

      
    </div>
    </>

  );
}

export default About