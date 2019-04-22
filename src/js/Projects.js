import React, {Component} from 'react'
import Footer from './Footer';

export default class Projects extends Component{
        render(){
          return(
            <div>
            <div className="container">
              <p className="lead">Professional Skills </p>
              <hr></hr>
              <div className="row">
              <div className="col-md-6">
              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">Programming Languages: </span><small class="CV-timeline-heading-duration">2019</small>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                  C++, C, Java, JavaScript, PHP, Html, CSS, MATLAB
                  </li>
                </ul>
              </section>

              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">Databases: </span>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                  MySQL, SQLite, SQL Server, Cassandra
                  </li>
                </ul>
              </section>

              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">Web Services:</span>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                  SOAP, RESTful
                  </li>
                </ul>
              </section>
              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">Frameworks: </span>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                  Laravel, CodeIgniter, Angular
                  </li>
                </ul>
              </section>
              </div>
              <div className="col-md-6">


              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">Tools: </span>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                  Proto.io, Visual Paradigm, NetBeans, Eclipse, Android Studio, IntelliJ, GIT, Maven, JUnit, Atom, Sublime
                  </li>
                </ul>
              </section>
              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">Networks: </span>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                  Perl, Python, Java, C++, Wireshark, PuTTY
                  </li>
                </ul>
              </section>
              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">Others: </span>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                  Agile, Scrum, Waterfall, RAD, User-Centered Design (UCD)
                  </li>
                </ul>
              </section>
              </div>
              </div>



            </div>
            <div>
            <Footer />
            </div>
            </div>
          )
        }
}
