import React from 'react'

const Project = () => {
  return (
    <h1>Portfolio</h1>

    <div class="container">
      <div class="card-deck">
        <div class="card">
          <a href="https://cprom.github.io/running-wild/" target="#"><img src="./assets/UCIeats_logo.png" class="card-img-top"
            alt="UCI Eats logo"></a>
            <div class="card-body">
              <a href="https://cprom.github.io/running-wild/" target="#">
                <a href="https://cprom.github.io/running-wild/"><p class="card-text">UCI Eats</p></a>
                <p>Web app that helps you search for restaurants and events around your area.</p>
    </div>
            </div>
            <div class="card">
              <a href="https://outbreakstatus.herokuapp.com/"><img src="./assets/OSbiohazzard.png" class="card-img-top-a" alt="Bio Hazzard symbol"></a>
                <div class="card-body">
                  <a href="#">
                    <p class="card-text">Outbreak Status</p>
                    <p>Web app that helps you track COVID-19.</p>
                  </a>
                </div>
  </div>
              <div class="card">
                <a href="#"><img src="./assets/headphones.jpg" class="card-img-top" alt="headphones"></a>
                  <div class="card-body">
                    <a href="#">
                      <p class="card-text">Clear</p>
                    </a>
                  </div>
  </div>
              </div>
  )
}

export default Project