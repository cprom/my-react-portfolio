import React from 'react'
import './portfolio.css'
import './style.css'

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>

      <div className="container">
        <div className="card-deck">
          <div className="card">
            <a href="https://cprom.github.io/running-wild/" target="#"><img src="./assets/images/UCIeats_logo.png" className="card-img-top-b"
              alt="UCI Eats logo" /></a>
            <div className="card-body">
              <a href="https://cprom.github.io/running-wild/" target="#" />
              <a href="https://cprom.github.io/running-wild/"><p className="card-text-a">UCI Eats</p>
                <p>Web app that helps you search for restaurants and events around your area.</p></a>
              <a href="https://github.com/cprom/running-wild" target="#"><i class="fab fa-github-square fa-2x"></i></a>

            </div>
          </div>
          <div className="card">
            <a href="https://outbreakstatus.herokuapp.com/" target="#"><img src="./assets/images/OSbiohazzard.png" className="card-img-top-a" alt="Bio Hazzard symbol" /></a>
            <div className="card-body">
              <a href="#">
                <p className="card-text">Outbreak Status</p>
                <p>Web app that helps you track COVID-19.</p>
              </a>
              <a href="https://github.com/EvanErickson/outbreakStatus" target="#"><i class="fab fa-github-square fa-2x"></i></a>

            </div>
          </div>
          <div className="card">
            <a href="#"><img src="./assets/images/coder_book_logos_blue.jpeg" className="card-img-top" alt="headphones" /></a>
            <div className="card-body">
              <a href="https://enigmatic-wildwood-51842.herokuapp.com/" target="#">
                <p className="card-text">Coder Book</p>
                <p>Social Media Web Aplication for Developers.</p>
                <a href="https://github.com/guidoasbun/project3" target="#"><i class="fab fa-github-square fa-2x"></i></a>
              </a>
            </div>
          </div>
        </div>

      </div >


    </>
  )
}


export default Projects