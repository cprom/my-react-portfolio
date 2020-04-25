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
            <a href="https://github.com/guidoasbun/project3" target="_blank"><img src="./assets/images/coder_book_logos_blue.jpeg" className="card-img-top" alt="headphones" /></a>
            <div className="card-body">
              <a href="https://enigmatic-wildwood-51842.herokuapp.com/" target="_blank">
                <p className="card-text">Coder Book</p>
                <p className="coder-book-text">Social Media Web application that connects developers.</p>
                <a href="https://github.com/guidoasbun/project3" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://cprom.github.io/running-wild/" target="_blank"><img src="./assets/images/UCIeats_logo_a.png" className="card-img-top"
              alt="UCI Eats logo" /></a>
            <div className="card-body">
              <a href="https://cprom.github.io/running-wild/" target="_blank" />
              <a href="https://cprom.github.io/running-wild/"><p className="card-text-a">UCI Eats</p>
                <p>Web app that helps you search for restaurants and events around your area.</p></a>
              <a href="https://github.com/cprom/running-wild" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>

            </div>
          </div>
          <div className="card">
            <a href="https://outbreakstatus.herokuapp.com/" target="_blank"><img src="./assets/images/OSbiohazzard_a.png" className="card-img-top" alt="Bio Hazzard symbol" /></a>
            <div className="card-body">
              <a href="https://outbreakstatus.herokuapp.com/">
                <p className="card-text">Outbreak Status</p>
                <p>Web application that that gives you up to date data about COVID-19</p>
              </a>
              <a href="https://github.com/EvanErickson/outbreakStatus" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>

            </div>
          </div>

        </div>

      </div >


    </>
  )
}


export default Projects