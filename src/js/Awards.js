import React, {Component} from 'react'
import Footer from './Footer';

export default class Awards extends Component {

  render(){
    return(
      <div><div className="container">
        <p className="lead">Awards </p>
        <hr></hr>
      <section className="CV-timeline CV-education-group">
      <h3 className="CV-timeline-heading">
        <span className="CV-timeline-heading-title">iLEAN</span>
      </h3>

      <ul className="CV-timeline-details">
        <li className="CV-timeline-details-item">
          March 2017: Award SCRUM training for project and team management skills
        </li>
      </ul>

      </section>

      <section className="CV-timeline CV-education-group">

      <h3 className="CV-timeline-heading">
        <span className="CV-timeline-heading-title">KU Leuven University</span>
      </h3>

      <ul className="CV-timeline-details">
        <li className="CV-timeline-details-item">
          September 2015:  Under the Group T scholarship program for masters of Electronics and ICT Engineering Technology for my academic achievement
        </li>
      </ul>

      </section>
      <section className="CV-timeline CV-education-group">

      <h3 className="CV-timeline-heading">
        <span className="CV-timeline-heading-title">Mekelle University</span>
      </h3>

      <ul className="CV-timeline-details">
        <li className="CV-timeline-details-item">
          September 2008:  Under the Mekelle Institute of Technology Scholarship for Bachelor of Computer Science and Engineering for my outstanding results both in the Ethiopian Schools Leaving Certificate
         Examination (ESLCE) and in the Entrance Examination set by the Institute
          </li>
      </ul>
      </section>
      <div>
      <Footer />
      </div>
      </div>
      </div>
    )
  }
}
