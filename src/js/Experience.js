import React,{Component} from 'react';
import Footer from './Footer';
export default class Experience extends Component {

    render(){
      return(
        <div>
        <div className="container">
          <p className="lead">Experience </p>
          <hr></hr>
           <section className="CV-timeline CV-job">
             <h3 className="CV-timeline-heading">
               <span className="CV-timeline-heading-title">C++ Developer </span>– <span class="CV-timeline-heading-location">GroepT </span><small class="CV-timeline-heading-duration">2019</small>
             </h3>
             <ul className="CV-timeline-details">
               <li className="CV-timeline-details-item">

               </li>
               <li className="CV-timeline-details-item">
               </li>
               <li className="CV-timeline-details-item">
               </li>
               <li className="CV-timeline-details-item">
               </li>
               <li className="CV-timeline-details-item">
               </li>
               <li className="CV-timeline-details-item">
               </li>
             </ul>
           </section>
         </div>
        <div>
        <Footer />
        </div>
        </div>
      )
    }
}
