import React, {Component} from 'react';
import Footer from './Footer';
export default class Home extends Component {


  render(){

        return (

          <div>
          <div className="container">
          <div className="row mx-auto">

          <div className="col-md-3 col-xs-12 col-mt-3">
            <img className="card-img rounded mx-auto d-block img-fluid" src="./img/sideWay.JPG" alt="Card image cap"/>
          </div>

           <div className="col-md-9 col-xs-12 mt-3">
             <main role="main" className="inner cover">
                 <h2 className="cover-heading">Efrem Gebremedhin Berhe</h2>
                 <address>
                   <strong>Belgium</strong> |
                   Monnikenstraat 03 |
                   3000, Leuven |
                   <abbr title=" Phone">P:</abbr> (+32) 483-527-879
                 </address>
                 <hr></hr>
                 <p className="lead">I am a junior web and software developer using REACT, BOOTSTRAP, LARAVEL, CODEIGNITER, MYSQL, ANDROID, JAVA, C++ and C.
                 </p>
                 <p className="lead">I am experienced working in agile frameworks and practice scrum to
                 foster collaborative thinking and deliver a high-value product. </p>
                 <p className="lead">2 years of teaching experience in Electrical and Computer Engineering department, Dire Dawa University, Ethiopia </p>

                 <blockquote>
                   <p>
                   <em>"The user is never wrong"</em>
                   </p>
                  
                 </blockquote>
             </main>
            </div>
          </div>
          </div>
          <div>
          <Footer />
          </div>
          </div>
        );
  }
}
