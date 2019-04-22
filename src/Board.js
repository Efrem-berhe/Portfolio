import React, {Component} from 'react';
import Square from './Square';

export default class Board extends Component {

  renderSquare(i){
    return <Square value={i}/>
  }
  render(){

    const status = 'Next player: X';

        return (
          <div>
          <h2 className="cover-heading">Efrem Gebremedhin Berhe</h2>
          <address>
            <strong>Belgium</strong> |
            Monnikenstraat 03 |
            3000, Leuven |
            <abbr title=" Phone">P:</abbr> (+32) 483-527-879
          </address>
          <hr></hr>
          <p className="lead">I am a junior web and software developer.
          I am experienced working in agile frameworks and practice scrum to
          foster collaborative thinking and deliver a high-value product. </p>

          <blockquote class="bg-gray primary">
            <p>
            <em>"The user is never wrong"</em>
            </p>
            <small>Human-Computer Interaction
            </small>
          </blockquote>

          </div>
        );
  }
}
