import React,{Component} from 'react';
import Footer from './Footer';
export default class Training extends Component {
  render(){
    return(
      <div>
      <div className="container">
        <p className="lead">Training</p>
        <hr></hr>
        <div className="CV-education">
        <section className="CV-timeline CV-education-group">
        <h3 className="CV-timeline-heading">
          <span className="CV-timeline-heading-title">iLEAN Training </span><span className="CV-timeline-heading-location">KULeuven University, Leuven, Belgium </span><small
          className="CV-timeline-heading-duration">2017</small>
        </h3>
        <ul className="CV-timeline-details">
          <li className="CV-timeline-details-item">
            Scrum itself is a simple framework for effective team collaboration on complex products.
          </li>
        </ul>
        </section>
        <section className="CV-timeline CV-education-group">
        <h3 className="CV-timeline-heading">
          <span className="CV-timeline-heading-title">EMBEDDED SYSTEMS ON FPGA </span><span className="CV-timeline-heading-location">Dire Dawa University, Dire Dawa, Ethiopia </span><small
          className="CV-timeline-heading-duration">2014</small>
        </h3>
        <ul className="CV-timeline-details">
          <li className="CV-timeline-details-item">

          </li>
        </ul>
        </section>
        </div>
      </div>
    <div>
    <Footer />
    </div>
      </div>

    )
  }
}
