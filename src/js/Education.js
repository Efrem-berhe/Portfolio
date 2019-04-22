import React,{Component} from 'react';
import Footer from './Footer';
export default class Education extends Component {
    render(){
      return(
        <div>
        <div className="container">
          <p className="lead">Education History </p>
          <hr></hr>
          <div className="CV-education">
          <section className="CV-timeline CV-education-group">
          <h3 className="CV-timeline-heading">
            <span className="CV-timeline-heading-title">Masters of Electronics and ICT Engineering Technology </span><span className="CV-timeline-heading-location">KULeuven University, Leuven, Belgium </span><small
            className="CV-timeline-heading-duration">2016-2019</small>
          </h3>
          <ul className="CV-timeline-details">
            <li className="CV-timeline-details-item">
              Key Courses: Modern Programming Practices, Big Data, Enterprise Architecture, Algorithms, Advanced Software Development, Human-Computer Interaction
            </li>

          </ul>
          </section>
          <section className="CV-timeline CV-education-group">
            <h3 className="CV-timeline-heading">
              <span className="CV-timeline-heading-title">Preparatory Program: Industrial Electronics </span><span className="CV-timeline-heading-location">KULeuven University, Leuven, Belgium </span><small
              className="CV-timeline-heading-duration">2015-2017</small>
            </h3>
            <ul className="CV-timeline-details">
              <li className="CV-timeline-details-item">
              Key Courses: Analog Electronics, Data Communication and Computer Networks, Digital Signal Processing, Software Development
              </li>
            </ul>
          </section>
             <section className="CV-timeline CV-education-group">
               <h3 className="CV-timeline-heading">
                 <span className="CV-timeline-heading-title">Bachelor of Computer Science and Engineering </span><span className="CV-timeline-heading-location">Mekelle University, Mekelle, Ethiopia </span><small
                 className="CV-timeline-heading-duration">2008 – 2013</small>
               </h3>
               <ul className="CV-timeline-details">
                 <li className="CV-timeline-details-item">
                   Key Courses: Programming, Software lifecycle and development, Artificial Intelligence, Database management, Usability, Interface Design, Cryptography.
                 </li>
               </ul>
             </section>
           </div>
           </div>
          <Footer />
        </div>
      )
    }
}
