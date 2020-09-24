import React from 'react'

const Portfolio = () => {
    return (
        <h1>This is the home page</h1>
        <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card">
            <img src="./assets/images/pokemon.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Project 1</h5>
              <p class="card-text">As a group, we made a Pokemon site with the database of
                pokemons and p-cards.</p>
              <a href="https://kalynbsimms.github.io/pokeProject/" class="btn btn-primary">Go somewhere</a>
              <a href=" https://github.com/Kalynbsimms/pokeProject.git" class="btn btn-primary">GitHub Repository</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="./assets/images/lifetrack.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Project 2</h5>
              <p class="card-text">We created a life track application that tracks our to do list, fitness, and diaries.
              </p>
              <a href="https://afternoon-stream-93666.herokuapp.com/" class="btn btn-primary">Go somewhere</a>
              <a href="https://github.com/jamiekim87/lifetrack.git" class="btn btn-primary">GitHub Repository</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="./assets/images/dayplanner.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Day Planner</h5>
              <p class="card-text">This is a simple calendar application that allows the user to save events for each hour
                of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by
                jQuery.
              </p>
              <a href="https://jamiekim87.github.io/moment/" class="btn btn-primary">Go somewhere</a>
              <a href="https://github.com/jamiekim87/moment.git" class="btn btn-primary">GitHub Repository</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="./assets/images/employee1.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Employee Summary</h5>
              <p class="card-text">This is an application to build a Node CLI that takes in
                information about employees and generates an HTML webpage that displays summaries for each person. Also,
                it ensures that all unit tests pass.
              </p>
              <a href="https://newname-jk.herokuapp.com/notes" class="btn btn-primary">Go somewhere</a>
              <a href="https://github.com/jamiekim87/NoteTaker.git" class="btn btn-primary">GitHub Repository</a>
            </div>
          </div>
        </div>
        
    )
}

export default Portfolio 