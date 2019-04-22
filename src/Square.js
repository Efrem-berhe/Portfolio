import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Square extends Component {

  render(){
    return(

          <button className=" btn-lg btn-secondary" type="btn">
          {this.props.value}
          </button>


    )
  }
}
