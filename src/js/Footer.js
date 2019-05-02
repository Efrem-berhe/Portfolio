import React,{Component} from 'react';

export default class Footer extends Component {
  render(){
    return(

      <footer className="mastfoot page-footer font-small special-color-dark pt-4">
        <div className="jumbotron-flud">
            <p className="align-center">Connect</p>
            <ul className="list-unstyled list-inline align-center">

              <li className="list-inline-item">
                <a href="https://m.me/effer.vision" className="btn-floating btn-fb mx-1">
                    <i className="fa fa-facebook-square"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://twitter.com/efferVision" className="btn-floating btn-tw mx-1">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="mailto:effer.vision@gmail.com" className="btn-floating btn-gplus mx-1">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="btn-floating btn-gplus mx-1">
                      <i className="fa fa-linkedin"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://wa.me/32483527898" className="btn-floating btn-dribbble mx-1">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </li>

            </ul>

          <div className="footer-copyright align-center py-3">© 2019 Berhe Efrem portfolio
          </div>
        </div>
        </footer>

    )
  }
}
